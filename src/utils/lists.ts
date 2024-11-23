import { createListCollection } from "@chakra-ui/react";
import { ExperienceLevel, WorkMode } from "./constants";

export const experienceLevel = createListCollection<{
  label: string;
  value: ExperienceLevel;
}>({
  items: [
    { label: "junior", value: "JUNIOR" },
    { label: "pleno", value: "PLENO" },
    { label: "sênior", value: "SENIOR" },
  ],
});

export const workMode = createListCollection<{
  label: string;
  value: WorkMode;
}>({
  items: [
    { label: "remoto", value: "REMOTO" },
    { label: "hibrido", value: "HIBRIDO" },
    { label: "presencial", value: "PRESENCIAL" },
  ],
});
