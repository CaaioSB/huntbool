import { z } from "zod";

export const ExperienceLevel = z.enum(["JUNIOR", "PLENO", "SENIOR"]);
export const WorkMode = z.enum(["REMOTO", "PRESENCIAL", "HIBRIDO"]);

export type ExperienceLevel = z.infer<typeof ExperienceLevel>;
export type WorkMode = z.infer<typeof WorkMode>;