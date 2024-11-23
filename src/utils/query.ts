interface SearchQuery {
  positions: string[];
  areas: string[];
  experience_level: string;
  work_mode: string;
  exclude?: string[];
}

// REFER: https://www.linkedin.com/help/linkedin/answer/a524335
export const generateSearchQuery = (query: SearchQuery): string => {
  const positionQuery = query.positions
    .map((position) => `"${position}"`)
    .join(" OR ");

  const areaQuery = query.areas.map((area) => `"${area}"`).join(" OR ");

  const excludeQuery = query?.exclude
    ?.map((exclusion) => `NOT "${exclusion}"`)
    .join(" ");

  const experienceQuery = query.experience_level
    ? `"${query.experience_level}"`
    : "";
  const workModeQuery = query.work_mode ? `"${query.work_mode}"` : "";

  let finalQuery = `(${positionQuery}) AND (${areaQuery})`;

  if (experienceQuery) {
    finalQuery += ` AND ${experienceQuery}`;
  }

  if (workModeQuery) {
    finalQuery += ` AND ${workModeQuery}`;
  }

  if (excludeQuery) {
    finalQuery += ` AND ${excludeQuery}`;
  }

  return finalQuery;
};
