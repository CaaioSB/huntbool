import { ButtonHTMLAttributes, ReactElement, SVGProps } from 'react'

export interface IconButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	children: ReactElement<SVGProps<SVGSVGElement>>
	classNames?: {
		base?: string
		icon?: string
	}
}
