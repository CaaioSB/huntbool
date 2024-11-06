import { tv } from 'tailwind-variants'
import { IconButtonProps } from './types'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { cloneElement, createElement } from 'react'

export const iconButtonStyles = tv({
	base: 'rounded-lg flex items-center justify-center focus:ring-4 p-2',
	variants: {
		variant: {
			primary:
				'bg-primary-500 hover:bg-primary-600 text-primary-50 ring-primary-700',
			secondary:
				'text-sm bg-secondary-500 hover:bg-secondary-600 ring-secondary-700',
		},
	},
	slots: {
		icon: 'h-6 w-6',
	},
})

export default function IconButton({
	children,
	variant = 'primary',
	classNames,
	...props
}: IconButtonProps) {
	return (
		<button
			{...props}
			className={iconButtonStyles({
				variant,
			}).base({ className: classNames?.base })}
		>
			{cloneElement(children, {
				className: iconButtonStyles().icon({ className: classNames?.icon }),
			})}
		</button>
	)
}
