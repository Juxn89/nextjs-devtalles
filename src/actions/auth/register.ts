'use server'

import bcrypt from "bcryptjs"
import prisma from "@/lib/prisma"

export const registerUser = async (name: string, email: string, password: string) => {
	try {
		const user = await prisma.user.create({
			data: {
				name,
				email,
				password: bcrypt.hashSync(password)
			},
			select: { id: true, name: true, email: true }
		})

		return {
			ok: true,
			user
		}
	} catch (error) {

		console.log(error)

		return {
			ok: false,
			error: 'Something was wrong!'
		}
	}
}