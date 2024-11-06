import React from 'react'
import NextLink from 'next/link'

import LinkProps from './types'
import { tv } from 'tailwind-variants'

const linkStyles = tv({
	variants: {
		variant: {
			primary:
				'text-sm bg-primary-500 hover:bg-primary-600 text-primary-50 rounded-lg px-5 py-2.5 focus:ring-4 ring-primary-700',
			secondary: '',
		},
	},
})

export default function Link({
	children,
	className,
	variant,
	...props
}: LinkProps) {
	return (
		<NextLink {...props} className={linkStyles({ className, variant })}>
			{children}
		</NextLink>
	)
}
