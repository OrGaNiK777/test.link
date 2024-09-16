import React from 'react'
import Button from '../atoms/Button'
import { ButtonTextProps } from '../interfaces'

const ButtonText: React.FC<ButtonTextProps> = ({ onClick, buttonLabel }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Button onClick={onClick} label={buttonLabel} />
		</div>
	)
}

export default ButtonText
