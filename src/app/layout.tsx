import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

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
		main: 'p-6 animate-pulse flex text-center flex-col justify-center items-center flex-1 max-w-screen-xl mx-auto w-full',
	},
})

export default function RootLayout() {
	return (
		<html className={layoutStyles().html()} lang="pt" suppressHydrationWarning>
			<body className={layoutStyles().body({ className: inter.className })}>
				<ThemeProvider attribute="class" defaultTheme='light'>
					<main className={layoutStyles().main()}>
						<svg width="150" height="150" viewBox="0 0 80 44" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 28C5 19.1634 12.1634 12 21 12H59C67.8366 12 75 19.1634 75 28C75 36.8366 67.8366 44 59 44H21C12.1634 44 5 36.8366 5 28Z" fill="#4C8BD6"/>
							<path d="M2.58844 17.1429C3.05521 22.4762 7.70999 26.6032 9.97903 28H5.31129C-4.49097 15.9619 1.48633 4.31746 5.70027 0C3.94987 2.28571 0.449053 10.2857 2.19946 15.4286C4.22215 15.7333 6.93203 11.873 8.03414 9.90476C8.03414 15.0476 3.94987 16.381 2.58844 17.1429Z" fill="#4C8BD6"/>
							<path d="M77.4116 17.1429C76.9448 22.4762 72.29 26.6032 70.021 28H74.6887C84.491 15.9619 78.5137 4.31746 74.2997 0C76.0501 2.28571 79.5509 10.2857 77.8005 15.4286C75.7778 15.7333 73.068 11.873 71.9659 9.90476C71.9659 15.0476 76.0501 16.381 77.4116 17.1429Z" fill="#4C8BD6"/>
							<path d="M45 28C45 20.8203 50.8203 15 58 15C65.1797 15 71 20.8203 71 28C71 35.1797 65.1797 41 58 41C50.8203 41 45 35.1797 45 28Z" fill="white"/>
						</svg>
						<h6 className='text-xl'>este projeto ainda está em desenvolvimento ッ</h6>
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
