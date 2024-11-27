'use client'

import { Button } from '@/components/ui/button'
import { ColorModeButton } from '@/components/ui/color-mode'
import { Field } from '@/components/ui/field'
import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '@/components/ui/select'
import { PERSONAL_DATA } from '@/utils/constants'
import { experienceLevel, workMode } from '@/utils/lists'
import { generateSearchQuery } from '@/utils/query'
import {
	Box,
	Card,
	Center,
	For,
	HStack,
	Input,
	Kbd,
	Tabs,
	Text,
	VStack,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LuCopy, LuCopyCheck, LuHelpCircle, LuSearch } from 'react-icons/lu'
import {
	HunterFormInputSchema,
	HunterFormOutputSchema,
	HunterFormSchema,
} from './schema'

enum TabsEnum {
	home = 'ferramenta',
	help = 'ajuda',
}

const TABS = [
	{ icon: <LuSearch />, label: TabsEnum.home },
	{ icon: <LuHelpCircle />, label: TabsEnum.help },
] as const

const HelpTexts = [
	{
		title: 'o que é busca booleana?',
		description:
			'a pesquisa booleana no LinkedIn usa palavras-chave e comandos como E, OU e aspas para filtrar resultados. é uma forma inteligente de encontrar pessoas ou vagas com precisão.',
	},
	{
		title: 'como isso pode me ajudar?',
		description:
			'você pode copiar a pesquisa booleana gerada pela ferramenta e colar no campo de busca do LinkedIn, filtre por vagas ou por postagens. nas postagens existe uma maior chance de encontrar vagas "desconhecidas".',
	},
	{
		title: 'para quais áreas posso utilizar?',
		description:
			'para todas, basta você preencher o formulário conforme seus requisitos. abaixo de cada campo tem uma dica de como preencher.',
	},
	{
		title: 'como preencher?',
		description: (
			<Box>
				<Text fontSize="sm">
					basta separar cada palavra chave com <Kbd>,</Kbd>.
					<br />
					exemplo para o campo de posições: recepcionista, vendedor, atendente
					<br />
					com o exemplo acima sua busca vai encontrar vagas para as 3 posições
					citadas.
				</Text>
			</Box>
		),
	},
	{
		title: 'ainda está com dúvidas?',
		description: (
			<Box>
				<Text fontSize="sm">
					conte comigo para qualquer ajuda que você precisar, use um dos meios
					de comunicação abaixo
					<br />
					<br />
				</Text>

				<VStack gap={2}>
					<Button
						as="a"
						href={PERSONAL_DATA.LINKEDIN}
						target="_blank"
						w="full"
						variant="outline"
						color="blue.300"
					>
						LinkedIn
					</Button>
					<Button
						as="a"
						href={`mailto:${PERSONAL_DATA.EMAIL}`}
						w="full"
						variant="outline"
						bg="blue.600"
					>
						E-mail
					</Button>
				</VStack>
			</Box>
		),
	},
]

export default function Page() {
	return (
		<Center p="10" alignItems="start" minH="svh">
			<Card.Root
				borderWidth={1}
				w={{ base: '1/3', lgDown: 'full' }}
				variant="outline"
			>
				<Tabs.Root defaultValue={TabsEnum.home} variant="outline">
					<Tabs.List>
						<For each={TABS}>
							{({ icon, label }) => (
								<Tabs.Trigger value={label}>
									{icon}
									{label}
								</Tabs.Trigger>
							)}
						</For>
					</Tabs.List>
					<HomeTab />
					<HelpTab />
				</Tabs.Root>
			</Card.Root>
		</Center>
	)
}

function HomeTab() {
	const {
		register,
		handleSubmit,
		formState: { isLoading, errors },
	} = useForm<HunterFormOutputSchema, HunterFormInputSchema>({
		resolver: zodResolver(HunterFormSchema),
	})
	const [isCopied, setIsCopied] = useState(false)

	const onSubmit = async (data: HunterFormOutputSchema) => {
		const query = generateSearchQuery(data)
		await navigator.clipboard.writeText(query)
		setIsCopied(true)
		setTimeout(() => setIsCopied(false), 2000)
	}

	return (
		<Tabs.Content padding={0} value={TabsEnum.home}>
			<Card.Body>
				<Card.Title
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Text>🕵️‍♂️ huntbool</Text>
					<ColorModeButton size="2xs" />
				</Card.Title>
				<Card.Description>encontre vagas de maneira assertiva</Card.Description>

				<form id="hunter-form" onSubmit={handleSubmit(onSubmit)}>
					<HStack widows="full">
						<VStack mt="10" gap="5">
							<Field
								invalid={!!errors?.positions}
								errorText={errors?.positions?.message}
								label="qual posição você deseja?"
								helperText="Exemplo: engenheiro de software, programador"
							>
								<Input {...register('positions')} />
							</Field>

							<Field
								invalid={!!errors?.areas}
								errorText={errors?.areas?.message}
								label="áreas/tecnologias que você tem domínio"
								helperText="react, reactjs, react.js, node, c#"
							>
								<Input {...register('areas')} />
							</Field>

							<Field
								invalid={!!errors?.experience_level}
								errorText={errors?.experience_level?.message}
							>
								<SelectRoot
									{...register('experience_level')}
									collection={experienceLevel}
								>
									<SelectLabel>qual é o seu nível de experiência?</SelectLabel>
									<SelectTrigger clearable>
										<SelectValueText />
									</SelectTrigger>
									<SelectContent>
										{experienceLevel.items.map((level) => (
											<SelectItem item={level} key={level.value}>
												{level.label}
											</SelectItem>
										))}
									</SelectContent>
								</SelectRoot>
							</Field>

							<Field
								invalid={!!errors?.work_mode}
								errorText={errors?.work_mode?.message}
							>
								<SelectRoot {...register('work_mode')} collection={workMode}>
									<SelectLabel>como deseja trabalhar?</SelectLabel>
									<SelectTrigger clearable>
										<SelectValueText />
									</SelectTrigger>
									<SelectContent>
										{workMode.items.map((mode) => (
											<SelectItem item={mode} key={mode.value}>
												{mode.label}
											</SelectItem>
										))}
									</SelectContent>
								</SelectRoot>
							</Field>

							<Field
								invalid={!!errors?.exclude}
								errorText={errors?.exclude?.message}
								label="o que você quer evitar?"
								helperText="aqui você pode por nome de empresas ou tecnologias."
							>
								<Input {...register('exclude')} />
							</Field>

							<Card.Root w="full" size="sm">
								<Card.Body>
									<Card.Title>👻 vagas fantasmas</Card.Title>
									<Card.Description>
										em breve, você poderá ocultar empresas que anunciam diversas
										vagas, muitas delas inexistentes.
									</Card.Description>
								</Card.Body>
							</Card.Root>
						</VStack>
					</HStack>
				</form>
			</Card.Body>

			<Card.Footer justifyContent="flex-end">
				<Button
					loading={isLoading}
					colorPalette={isCopied ? 'green' : 'accent'}
					type="submit"
					form="hunter-form"
					w="full"
				>
					{isCopied ? <LuCopyCheck /> : <LuCopy />}
					{isCopied ? 'copiado' : 'copiar busca'}
				</Button>
			</Card.Footer>
		</Tabs.Content>
	)
}

function HelpTab() {
	return (
		<Tabs.Content padding={0} value={TabsEnum.help}>
			<Card.Body>
				<Card.Title
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Text>🆘 ajuda</Text>
					<ColorModeButton size="2xs" />
				</Card.Title>
				<Card.Description>
					entenda como funciona a pesquisa booleana e como ela vai te ajudar
					encontrar as melhoras vagas
				</Card.Description>

				<VStack mt="6" gap={4} alignItems="start">
					<For each={HelpTexts}>
						{({ title, description }) => (
							<Box>
								<Text fontWeight={800}>{title}</Text>
								{typeof description === 'string' ? (
									<Text fontSize="sm">{description}</Text>
								) : (
									description
								)}
							</Box>
						)}
					</For>
				</VStack>
			</Card.Body>
		</Tabs.Content>
	)
}
