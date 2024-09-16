import React from 'react'
import { TextProps } from '../interfaces'

const Text: React.FC<TextProps> = ({ value }) => {
	return <span className='value-text'>{value}</span>
}

export default Text
