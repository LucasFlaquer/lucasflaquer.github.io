import { createBrowserRouter } from "react-router";

import SiteLayout from "@/components/layout/site-layout.tsx";
import AboutPage from "@/pages/about-page.tsx";
import ExperiencePage from "@/pages/experience-page.tsx";
import HomePage from "@/pages/home-page.tsx";
import NotFoundPage from "@/pages/not-found-page.tsx";
import SkillsPage from "@/pages/skills-page.tsx";

export const router = createBrowserRouter([
  {
    Component: SiteLayout,
    children: [
      { Component: HomePage, index: true },
      { Component: ExperiencePage, path: "experience/:slug" },
      { Component: AboutPage, path: "about" },
      { Component: SkillsPage, path: "skills" },
      { Component: NotFoundPage, path: "*" },
    ],
  },
]);
