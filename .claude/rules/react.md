# React Rules

These rules take precedence over any conflicting guidance elsewhere. They apply to every `.tsx` file in this repo (Vite + React 19 single-page app, Tailwind CSS v4, shadcn/ui on Base UI, Phosphor icons). There is no server: everything renders in the browser and ships as static files to GitHub Pages.

## Function components as arrow functions

No class components. Components are arrow functions assigned to a `const` (`react/function-component-definition`), with a typed props object and no `React.FC`. Filenames are kebab-case; keep one component export per file so Fast Refresh works.

```tsx
// Bad
class ProjectCard extends React.Component<ProjectCardProps> {
  render() {
    return <article>{this.props.project.title}</article>;
  }
}

// Good — src/components/projects/project-card.tsx
type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article>{project.title}</article>
);

export default ProjectCard;
```

React 19: pass `ref` as a normal prop, never `React.forwardRef`.

## Create small and reusable components

One component, one responsibility. If a component renders several unrelated visual blocks, split it. Combined with the 100-line file limit, most components live in their own file.

```tsx
// Bad — one component doing heading + tag filter + grid + empty state
const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <section>
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-2xl">Projects</h2>
      <a
        className="text-primary text-sm"
        href="https://github.com/LucasFlaquer"
      >
        All repos
      </a>
    </div>
    <div className="flex gap-2">{/* ...tag filters... */}</div>
    {projects.length === 0 ? (
      <p className="text-muted-foreground">No projects yet</p>
    ) : (
      <ul className="grid gap-4 md:grid-cols-2">{/* ...cards... */}</ul>
    )}
  </section>
);

// Good — composable pieces, each reusable on its own
const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <section aria-labelledby="projects-heading" className="flex flex-col gap-4">
    <ProjectsHeader />
    <ProjectTagFilter />
    <ProjectGrid projects={projects} />
  </section>
);
```

Reusable means: no knowledge of where it is rendered, no reaching into state it does not own, props as the only input.

## Avoid spreading props

Never write `<Element {...props} />`. Spreading hides the component's real contract, leaks unintended attributes into the DOM, and makes renames invisible to TypeScript. List props explicitly.

```tsx
// Bad — what does Card actually accept? Nobody knows
const ProjectCard = (props: ProjectCardProps) => <Card {...props} />;

// Good — explicit contract
type ProjectCardProps = {
  title: string;
  summary: string;
  onSelect: () => void;
};

const ProjectCard = ({ title, summary, onSelect }: ProjectCardProps) => (
  <Card onClick={onSelect}>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{summary}</CardDescription>
  </Card>
);
```

Exception: shadcn/ui primitives under `src/components/ui/` are generated wrappers around Base UI and native elements and may keep their `...props` passthrough. Don't introduce the pattern in application code.

## Avoid unnecessary `useEffect`

`useEffect` is for synchronizing with something outside React (subscriptions, browser APIs, non-React widgets). It is not for deriving data or transforming props.

```tsx
// Bad — derived state in an effect: extra render, stale frame
const ProjectGrid = ({ projects, activeTag }: ProjectGridProps) => {
  const [visible, setVisible] = useState<Project[]>([]);
  useEffect(() => {
    setVisible(projects.filter((project) => project.tags.includes(activeTag)));
  }, [projects, activeTag]);
  return <ProjectList projects={visible} />;
};

// Good — compute during render
const ProjectGrid = ({ projects, activeTag }: ProjectGridProps) => {
  const visible = projects.filter((project) =>
    project.tags.includes(activeTag)
  );
  return <ProjectList projects={visible} />;
};
```

Portfolio content is static, so prefer typed data modules (see below) over fetching. When remote data is genuinely needed (e.g. GitHub repository stats), the fetch lives in a `src/lib/` function and the effect lives in a custom hook with an `AbortController` cleanup, never inline in a component.

```tsx
// Bad — fetch inline in a component, no cleanup, races on fast re-renders
const RepoStars = ({ repo }: RepoStarsProps) => {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    fetch(`https://api.github.com/repos/LucasFlaquer/${repo}`)
      .then((response) => response.json())
      .then((data) => setStars(data.stargazers_count));
  }, [repo]);
  return <span>{stars}</span>;
};

// Good — component consumes a hook
const RepoStars = ({ repo }: RepoStarsProps) => {
  const { stars, isLoading } = useRepoStars(repo);
  return <output aria-busy={isLoading}>{stars ?? "—"}</output>;
};
```

```ts
// Good — src/hooks/use-repo-stars.ts, the effect owns its cleanup
export const useRepoStars = (repo: string) => {
  const [stars, setStars] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setStars(await fetchRepoStars(repo, controller.signal));
      } catch {
        setStars(null);
      } finally {
        setIsLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, [repo]);
  return { isLoading, stars };
};
```

An effect is justified for: event listeners, `IntersectionObserver` (scroll-spy, reveal animations), `matchMedia` / `localStorage` theme sync, timers, and third-party imperative libraries. Always return a cleanup function.

## Use `useMemo` for heavy calculations only

`useMemo` exists to skip expensive work across re-renders. Memoizing a string concat or a cheap comparison costs more than it saves.

```tsx
// Bad — memoizing trivial work
const label = useMemo(() => `${entry.role} at ${entry.company}`, [entry]);

// Good — expensive aggregation over the full project list
const SkillsCloud = ({ projects }: SkillsCloudProps) => {
  const skillCounts = useMemo(() => countSkillsByProject(projects), [projects]);
  return <SkillList counts={skillCounts} />;
};
```

Also valid: stabilizing a reference passed to a memoized child or used in a dependency array.

```tsx
// Good — stable reference keeps the memoized timeline from re-rendering
const timelineOptions = useMemo(
  () => ({ locale, showCurrent }),
  [locale, showCurrent]
);
return <MemoizedTimeline options={timelineOptions} />;
```

## Keep content and data access out of components

Components render. They don't hold hardcoded content arrays, fetch URLs or API parsing. Portfolio content (projects, experience, skills, social links) lives in typed modules under `src/data/`; remote calls live in `src/lib/`. The component consumes what those return.

```tsx
// Bad — content and fetch details embedded in the component
const ExperienceTimeline = () => {
  const entries = [
    { company: "Acme", end: null, role: "Frontend Engineer", start: "2023-01" },
    {
      company: "Globex",
      end: "2022-12",
      role: "Web Developer",
      start: "2020-03",
    },
  ];
  return <ol>{/* ... */}</ol>;
};
```

```ts
// Good — src/data/experience.ts
import type { Experience } from "@/types/experience.ts";

export const experience: Experience[] = [
  { company: "Acme", end: null, role: "Frontend Engineer", start: "2023-01" },
  {
    company: "Globex",
    end: "2022-12",
    role: "Web Developer",
    start: "2020-03",
  },
];
```

```ts
// Good — src/lib/github.ts
const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USERNAME = "LucasFlaquer";

export const fetchRepoStars = async (
  repo: string,
  signal: AbortSignal
): Promise<number> => {
  const response = await fetch(
    `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo}`,
    { signal }
  );
  if (!response.ok) {
    throw new Error(
      `GitHub request for ${repo} failed with ${response.status}`
    );
  }
  const data: { stargazers_count: number } = await response.json();
  return data.stargazers_count;
};
```

```tsx
// Good — src/components/experience/experience-timeline.tsx
const ExperienceTimeline = () => (
  <ol className="flex flex-col gap-6">
    {experience.map((entry) => (
      <ExperienceItem entry={entry} key={`${entry.company}-${entry.start}`} />
    ))}
  </ol>
);
```

The payoff: content edits never touch markup, and helpers are testable without rendering.

## Extract logic into `use`-prefixed hooks

Stateful logic that is not JSX belongs in a custom hook named `use*`, in its own file under `src/hooks/`. The component keeps markup and wiring only.

```tsx
// Bad — form state, validation and submission tangled with markup
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  // ...30 more lines of handlers and validation...
  return <form>{/* ... */}</form>;
};
```

```ts
// Good — src/hooks/use-contact-form.ts
export const useContactForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    try {
      await sendContactMessage({ email });
      setError(null);
    } catch (sendError) {
      setError(
        sendError instanceof Error ? sendError.message : SEND_FAILED_MESSAGE
      );
    } finally {
      setIsSending(false);
    }
  };
  return { email, error, isSending, setEmail, submit };
};
```

```tsx
// Good — src/components/contact/contact-form.tsx
const ContactForm = () => {
  const { email, setEmail, error, isSending, submit } = useContactForm();
  return (
    <form onSubmit={submit}>
      <Label htmlFor="email">Email</Label>
      <Input
        aria-describedby={error ? "email-error" : undefined}
        aria-invalid={Boolean(error)}
        id="email"
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        value={email}
      />
      {error ? (
        <p className="text-destructive text-sm" id="email-error" role="alert">
          {error}
        </p>
      ) : null}
      <Button disabled={isSending} type="submit">
        Send
      </Button>
    </form>
  );
};
```

Hooks are called at the top level only, never conditionally or inside loops.

## Always use accessibility attributes

Semantic elements first (`<header>`, `<nav>`, `<main>`, `<section>`, `<button>`, `<a>`); ARIA fills the gaps semantics cannot express. Every interactive element must be reachable by keyboard and announceable by screen readers.

```tsx
// Bad — no name, no semantics, no keyboard support
<div className="cursor-pointer" onClick={toggleTheme}>
  <MoonIcon />
</div>

// Good
<button
  aria-label="Switch to dark theme"
  aria-pressed={isDark}
  className="rounded-md p-2 hover:bg-muted"
  onClick={toggleTheme}
  type="button"
>
  <MoonIcon aria-hidden="true" />
</button>
```

Checklist for every component:

- Icon-only controls and links (GitHub, LinkedIn, email) get `aria-label`; decorative icons get `aria-hidden="true"`.
- External links use `target="_blank" rel="noreferrer"` and say so in the accessible name when it matters ("GitHub profile, opens in a new tab").
- Inputs get a `<label htmlFor>`; errors get `aria-invalid` + `aria-describedby` + `role="alert"`.
- Toggles get `aria-pressed` / `aria-expanded` and `aria-controls` (theme switch, mobile menu).
- Each page section gets `aria-labelledby` pointing at its heading; the nav marks the current section with `aria-current`.
- Async regions get `aria-busy` or `aria-live="polite"`.
- Images get meaningful `alt` (project screenshots describe the project; `alt=""` when decorative).
- One `<h1>` (the name/hero), then heading levels descend without skipping.
- Animations respect `prefers-reduced-motion` (Tailwind `motion-safe:` / `motion-reduce:`).
- Mouse handlers on non-native elements need keyboard equivalents — or use a `<button>`.

## Style with Tailwind CSS

Tailwind v4 utility classes are the styling mechanism. No CSS Modules, no styled-components, no new component `.css` files, no inline `style` objects for static styling. `src/app.css` is leftover Vite demo CSS to be removed, not extended.

```tsx
// Bad
<div style={{ display: "flex", gap: 8, padding: 16 }}>

// Good
<div className="flex gap-2 p-4">
```

- Compose conditional classes with the `cn` helper from `@/lib/utils`, never string concatenation.
- Use the theme tokens from `src/index.css` (`bg-background`, `text-muted-foreground`, `border-border`, `text-primary`) instead of raw hex, raw palette colors or arbitrary values. Dark mode follows the `.dark` class, so tokens adapt automatically.
- Reach for shadcn/ui components (`pnpm dlx shadcn@latest add <name>`) before hand-rolling buttons, cards, badges or dialogs.
- Icons come from `@phosphor-icons/react`, imported by name.
- `style` is acceptable only for genuinely dynamic values (a computed progress width, a CSS variable).

```tsx
// Good — conditional classes via cn, tokens over raw colors
<a
  aria-current={isActive ? "true" : undefined}
  className={cn(
    "rounded-md px-3 py-1.5 text-sm transition-colors",
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:text-foreground"
  )}
  href={`#${section.id}`}
>
  {section.label}
</a>
```

```tsx
// Good — dynamic value, not static styling
<div className="h-2 rounded bg-primary" style={{ width: `${proficiency}%` }} />
```
