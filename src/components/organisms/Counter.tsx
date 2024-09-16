import React from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import useCounter from '../../hooks/useCounter'

const Counter: React.FC = () => {
	const { count, increment, decrement } = useCounter()

	return (
		<div className='counter-container'>
			<Text value={count} />
			<Button onClick={increment} label='+' />
			<Button onClick={decrement} label='-' />
		</div>
	)
}

export default Counter
