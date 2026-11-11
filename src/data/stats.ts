import type { Stat } from "./types";
import { PROJECTS } from "./projects";

export const STATS: Stat[] = [
  { value: PROJECTS.length, suffix: "+", labelKey: "projectsDelivered" },
  { value: 5, suffix: "", labelKey: "industriesServed" },
  { value: 3, suffix: "", labelKey: "yearsBuilding" },
  { value: 2, suffix: "", labelKey: "countriesReached" },
];
