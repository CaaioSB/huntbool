'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { tv } from 'tailwind-variants'

import { Logo, Link, IconButton } from '@/components'
import { HeaderProps } from './types'
import {
	Bars3Icon,
	MoonIcon,
	SunIcon,
	XMarkIcon,
} from '@heroicons/react/24/solid'

const headerStyles = tv({
	base: 'w-full h-12 border px-4 flex flex-row justify-between items-center order-1',
	slots: {
		nav: ' border-gray-200 px-4 lg:px-6 py-2.5 bg-primary-500 dark:bg-gray-900',
		actions: 'flex items-center lg:order-2 space-x-2',
		logoText:
			'ml-3 self-center text-xl font-semibold whitespace-nowrap text-white',
		wrapper:
			'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl',
		menu: 'justify-center lg:justify-between  items-center w-full lg:flex lg:w-auto lg:order-1 hidden aria-expanded:flex',
		spacer: 'flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0',
		link: 'block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-',
	},
})

export default function Header({ routes }: HeaderProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const { theme, setTheme } = useTheme()

	return (
		<header>
			<nav className={headerStyles().nav()}>
				<div className={headerStyles().wrapper()}>
					<Link href="#" className="flex items-center">
						<Logo />
						<span className={headerStyles().logoText()}>Boilerplate</span>
					</Link>

					<div className={headerStyles().actions()}>
						<IconButton
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
						</IconButton>
						<Link variant="primary" href="#">
							Login
						</Link>
						<IconButton
							classNames={{ base: 'block lg:hidden' }}
							aria-controls="header-mobile-menu"
							aria-expanded={isMobileMenuOpen}
							data-collapse-toggle="header-mobile-menu"
							onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
						>
							{isMobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
						</IconButton>
					</div>

					<div
						id="header-mobile-menu"
						aria-expanded={isMobileMenuOpen}
						className={headerStyles().menu()}
					>
						<ul className={headerStyles().spacer()}>
							{routes.map((route, index) => (
								<li key={`route-link-${index}`}>
									<Link
										href={route.url}
										onClick={() => setIsMobileMenuOpen(false)}
										className={headerStyles().link()}
									>
										{route.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
