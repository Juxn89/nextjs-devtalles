'use client'

import clsx from 'clsx';
import Link from 'next/link'
import { useState } from 'react';
import { registerUser, login } from '@/actions';
import { SubmitHandler, useForm } from 'react-hook-form'

type FormInputs = {
	name: string;
	email: string;
	password: string;
}

export const RegisterForm = () => {
	const [error, setError] = useState<string>('')

	const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
	
	const onSubmitForm: SubmitHandler<FormInputs> = async (data) => {
		const { name, email, password } = data

		const registerUserResponse = await registerUser(name, email, password)

		if(!registerUserResponse.ok) {
			setError(registerUserResponse.error!)
			return
		}

		await login(email.toLowerCase(), password)
		window.location.replace('/')
	}

	return (
		<>
			<form onSubmit={ handleSubmit(onSubmitForm) } className="flex flex-col">
				<label htmlFor="name">Full name</label>
				<input
					className={
						clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
							'border-red-500': errors.name
						})
					}
					type="text"
					{ ...register('name', { required: true }) }
				/>

				<label htmlFor="email">Email</label>
				<input
					className={
						clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
							'border-red-500': errors.email
						})
					}
					type="email"
					{ ...register('email', { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ }) }
				/>

				<label htmlFor="password">Password</label>
				<input
					className={
						clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
							'border-red-500': errors.password
						})
					}
					type="password"
					{ ...register('password', { required: true, minLength: 6 }) }
				/>

				<span className="text-red-500 mb-5">{ error }</span>

				<button className="btn-primary hover:cursor-pointer" type="submit">Create account</button>

				{/* divisor line */}
				<div className="flex items-center my-5">
					<div className="flex-1 border-t border-gray-500"></div>
					<div className="px-2 text-gray-800">O</div>
					<div className="flex-1 border-t border-gray-500"></div>
				</div>

				<Link href="/auth/login" className="btn-secondary text-center">
					Sign in
				</Link>
			</form>
		</>
	)
}
