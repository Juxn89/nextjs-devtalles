'use server'

import { signIn } from '@/auth.config'

export async function authenticate(prevState: string | undefined, formData: FormData) {
	try {
		console.log('Login action called with:', Object.fromEntries(formData))
		await signIn('credentials', formData)
	} catch (error) {
		return 'CredentialsSignin'
		// if( (error as Error).message.includes('CredentialsSignin')) {
		// 	return 'Credentials are invalid'
		// }

		// throw error
	}
}