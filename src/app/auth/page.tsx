import { redirect } from 'next/navigation'

export const AuthPage = () => {

	redirect('/auth/login')

	return (
		<></>
	)
}

export default AuthPage
