import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/primas"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { signInEmailPassword } from "@/auth/actions/auth-actions";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
		}),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: "Email", type: "email", placeholder: "you@example.com" },
				password: { label: "Password", type: "password", placeholder: "**********" }
			},
			async authorize(credentials, req) {
				const user = await signInEmailPassword(credentials!.email, credentials!.password)

				if (user)
					return user
				
				return null
			}
		}),
    // ...add more providers here
  ],
	session: {
		strategy: 'jwt'
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			const dbUser = await prisma.user.findFirst({ where: { email: user?.email } })

			if(!dbUser?.isActive)
				throw new Error('User is not active')

			if (dbUser) {
				token.id = dbUser.id ?? 'n0-uuid'
				token.roles = dbUser.roles ?? ['no-roles']
			}
			return token
		},
		async session({ session, token, user }) {
			if (session && session.user) {
				session.user.id = token.id
				session.user.roles = token.roles
			}
			return session
		}
	}
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}