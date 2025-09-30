import clsx from 'clsx'
import { useFormStatus } from 'react-dom'

export const LoginButton = () => {
	const { pending } = useFormStatus()

	return (
		<>
			<button 
				className={ clsx({
					"btn-primary": !pending,
					"btn-disabled": pending
				})} 
				type="submit"
				disabled={pending}
			>
				{pending ? 'Signing in...' : 'Sign in'}
			</button>
		</>
	)
}
