'use client'

import Link from 'next/link'
import React, { useActionState } from 'react'
import { authenticate } from '@/actions'

export const LoginForm = () => {

	const [ state, formAction, isPending ] = useActionState(authenticate, undefined)

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

				<button className="btn-primary">Sign in</button>

				{/* divisor l ine */}
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
