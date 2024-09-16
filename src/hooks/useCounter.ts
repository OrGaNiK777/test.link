// src/hooks/useCounter.ts
import { useState, useCallback } from 'react'
import { debounce } from 'lodash'

const DEBOUNCE_MS = 100

const useCounter = () => {
	const [count, setCount] = useState(0)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const increment = useCallback(
		debounce(() => setCount((c) => c + 1), DEBOUNCE_MS),
		[]
	)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const decrement = useCallback(
		debounce(() => setCount((c) => c - 1), DEBOUNCE_MS),
		[]
	)

	return { count, increment, decrement }
}

export default useCounter
