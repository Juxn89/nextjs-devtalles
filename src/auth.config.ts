import z from 'zod';
import bcryptjs from 'bcryptjs';
import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from './lib/prisma';
 
export const authConfig: NextAuthConfig = {
	// Usar JWT strategy (sin base de datos para sesiones)
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/new-account',
		error: '/auth/login'
	},
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.email(), password: z.string().min(6) })
					.safeParse(credentials);

				if(!parsedCredentials.success) return null
				
				const { email, password } = parsedCredentials.data

				const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } })
				if(!user) return null

				const isValidPassword = bcryptjs.compareSync(password, user.password)
				if(!isValidPassword) return null

				const { password: _password, ...userData } = user

				return userData
			}
		})
	],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.data = user
			}
			return token
		},
		session({ session, token }) {
			session.user = token.data
			return session
		},
	}
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)