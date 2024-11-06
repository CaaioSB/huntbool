import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { Footer, Header } from '@/components'

import './globals.css'
import { tv } from 'tailwind-variants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'caiosb | next.js boilerplate',
	description: 'The caiosb next.js boilerplate',
}

const layoutStyles = tv({
	slots: {
		html: 'h-full',
		body: 'h-full flex flex-col',
		main: 'flex-1 max-w-screen-xl mx-auto w-full',
	},
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={layoutStyles().html()} lang="pt" suppressHydrationWarning>
			<body className={layoutStyles().body({ className: inter.className })}>
				<ThemeProvider attribute="class">
					<Header
						routes={[
							{ label: 'Início', url: '/' },
							{ label: 'Serviços', url: '/services' },
							{ label: 'Sobre nós', url: '/about' },
							{ label: 'Contato', url: '/contact' },
						]}
					/>
					<main className={layoutStyles().main()}>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
