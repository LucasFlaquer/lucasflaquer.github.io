import { useLocale } from "@/hooks/use-locale.ts";

const LineLegend = () => {
  const { ui } = useLocale();
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
      <li className="flex items-center gap-2">
        <span aria-hidden="true" className="bg-line-frontend h-2 w-8" />
        {ui.line.legendFrontend}
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden="true" className="bg-line-backend h-2 w-8" />
        {ui.line.legendBackend}
      </li>
      <li className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="border-foreground h-5 w-8 rounded-full border-[3px]"
        />
        {ui.line.legendInterchange}
      </li>
    </ul>
  );
};

export default LineLegend;
