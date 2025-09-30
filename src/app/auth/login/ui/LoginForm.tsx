'use client'

import Link from 'next/link'
import { useActionState, useEffect } from 'react'
import { IoInformationOutline } from 'react-icons/io5'
import { authenticate } from '@/actions'
import { LoginButton } from './LoginButton'
import { useRouter } from 'next/navigation'

export const LoginForm = () => {

	const [ state, formAction ] = useActionState(authenticate, undefined)
	const router = useRouter()

	useEffect(() => {
		if (state === 'SUCCESS')
			router.replace('/')
	}, [state])

	return (
		<form action={ formAction }>
			<div className="flex flex-col">
				<label htmlFor="email">Email</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5"
					type="email"
					name='email'
				/>

				<label htmlFor="password">Password</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5"
					type="password"
					name='password'
				/>

				<div 
					className="flex h-8 items-end- space-x-1"
					aria-live='polite'
					aria-atomic='true'
				>
					{ state === 'CREDENTIALS_INVALID' && (
						<div className='flex mb-2'>
							<IoInformationOutline className='h-5 w-5 text-red-500' />
							<p className='text-sm text-red-500'>Invalid email or password</p>
						</div>
					)}
				</div>

				<LoginButton />

				{/* divisor line */}
				<div className="flex items-center my-5">
					<div className="flex-1 border-t border-gray-500"></div>
					<div className="px-2 text-gray-800">O</div>
					<div className="flex-1 border-t border-gray-500"></div>
				</div>

				<Link href="/auth/new-account" className="btn-secondary text-center">
					Create a new account
				</Link>
			</div>
		</form>
	)
}
