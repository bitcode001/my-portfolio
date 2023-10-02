import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function animationDelay(del: number) {
	return {
		'animation-delay': `${del}s`
	}
}
