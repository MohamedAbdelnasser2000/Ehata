import type { Stat } from "./types";
import { PROJECTS } from "./projects";

const projectCategoryCount = new Set(PROJECTS.map((project) => project.category)).size;
const technologyCount = new Set(PROJECTS.flatMap((project) => project.tech)).size;

export const STATS: Stat[] = [
  { value: PROJECTS.length, suffix: "", labelKey: "selectedProjects" },
  { value: projectCategoryCount, suffix: "", labelKey: "projectCategories" },
  { value: technologyCount, suffix: "", labelKey: "technologies" },
  { value: 2, suffix: "", labelKey: "siteLanguages" },
];
