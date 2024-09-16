// src/components/interfaces.ts

export interface ButtonProps {
	onClick: () => void
	label: string
}

export interface TextProps {
	value: string | number
}

export interface ButtonTextProps {
	onClick: () => void
	textValue: string | number
	buttonLabel: string
}
