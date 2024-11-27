import { ExperienceLevel, WorkMode } from '@/utils/constants'
import { z } from 'zod'

export const HunterFormSchema = z.object({
	positions: z
		.string()
		.min(1)
		.transform((positions) =>
			positions.split(',').map((position) => position.trim()),
		),
	areas: z
		.string()
		.min(1)
		.transform((areas) => areas.split(',').map((area) => area.trim())),
	experience_level: ExperienceLevel.or(z.literal('')),
	work_mode: WorkMode.or(z.literal('')),
	exclude: z
		.string()
		.optional()
		.transform((exclude) =>
			exclude?.split(',').map((toExclude) => toExclude.trim()),
		),
})

export type HunterFormInputSchema = z.input<typeof HunterFormSchema>
export type HunterFormOutputSchema = z.output<typeof HunterFormSchema>
