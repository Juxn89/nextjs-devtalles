'use server'

import { signIn } from '@/auth.config'
import { sleep } from '@/utils'

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