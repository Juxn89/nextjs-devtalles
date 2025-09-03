import prisma from "@/lib/primas";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

	await prisma.todo.deleteMany(); // delete all existing todos
	await prisma.user.deleteMany();

	await prisma.user.create({
		data: {
			email: 'test@example.com',
			password: bcrypt.hashSync('123456'),
			roles: [ 'admin', 'client', 'super-user' ],
			todos: {
				create: [
					{ description: 'Soul stone', completed: true },
					{ description: 'Time stone' },
					{ description: 'Space stone' },
					{ description: 'Reality stone' },
					{ description: 'Power stone' },
					{ description: 'Mind stone' }
				]
			}
		}
	})

	return NextResponse.json({ message: 'Seed executed' })
}
