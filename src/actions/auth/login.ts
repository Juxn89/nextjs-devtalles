'use server'

import { sleep } from '@/utils'
import { signIn } from '@/auth.config'

export async function authenticate(prevState: string | undefined, formData: FormData) {
	try {
		await sleep(2)

		await signIn('credentials', {
			...Object.fromEntries(formData),
			redirect: false
		})

		return 'SUCCESS'
	} catch (error) {
		if( (error as Error).message.includes('CredentialsSignin'))
			return 'CREDENTIALS_INVALID'

		return 'UNKNOWN_ERROR'
	}
}

export const login = async(email: string, password: string) => { 
	try {
		await signIn('credentials', { email, password })

		return {
			ok: true
		}
	}
	catch(error) {
		console.log(error)

		return {
			ok: false,
			error: 'Something went wrong!'
		}
	}
}