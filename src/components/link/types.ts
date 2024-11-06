import { LinkProps as NextLinkPros } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

export default interface LinkProps
	extends NextLinkPros,
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	variant?: 'primary' | 'secondary'
	children: ReactNode
}
