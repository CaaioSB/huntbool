import React from 'react'
import { tv } from 'tailwind-variants'
import { FooterProps } from './types'

import { Link, Logo } from '@/components'

const data = [
	[
		'Nosso site',
		[
			{
				label: 'Serviços',
				link: '/services',
			},
			{
				label: 'Sobre nós',
				link: '/about',
			},
		],
	],
	[
		'Contato',
		[
			{
				label: '+55 11 00000-0000',
				link: 'tel:+5511977466138',
			},
			{
				label: 'contato@company.com',
				link: 'mailto:contato@company.com',
			},
		],
	],
] as const

export const footerStyles = tv({
	base: 'w-full bg-primary-500 dark:bg-gray-900 text-white p-10 flex flex-col space-y-8',
	slots: {
		wrapper: 'max-w-screen-xl space-y-4 w-full mx-auto',
	},
})

export default function Footer({}: FooterProps) {
	return (
		<footer className={footerStyles().base()}>
			<div className={footerStyles().wrapper()}>
				<div className="flex flex-row ">
					<div className="flex space-x-12">
						<Logo className="fill-white w-12 h-12" />

						{data.map(([title, links], sectionIndex) => {
							return (
								<div
									className="space-y-4"
									key={`footer-section-${sectionIndex}`}
								>
									<h1 className="font-bold">{title}</h1>

									<div className="flex flex-col space-y-2">
										{links.map(({ label, link }, linkIndex) => (
											<Link
												key={`footer-section-${sectionIndex}-link-${linkIndex}`}
												href={link}
											>
												{label}
											</Link>
										))}
									</div>
								</div>
							)
						})}
					</div>

					<h2 className="ml-auto">Slogan from company here</h2>
				</div>

				<hr className="border-white dark:border-gray-600" />
				<div className="flex justify-between">
					<p>© 2024 Next Boilerplate</p>
					<p>[Social Media Icons]</p>
				</div>
			</div>
		</footer>
	)
}
