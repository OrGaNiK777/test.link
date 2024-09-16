import { ButtonProps } from '../interfaces'

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
	return (
		<button className='button' onClick={onClick}>
			{label}
		</button>
	)
}

export default Button
