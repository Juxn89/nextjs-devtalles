import prisma from "@/lib/primas";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

	await prisma.todo.deleteMany(); // delete all existing todos

	const todo = await prisma.todo.createMany({
		data: [
			{ description: 'Soul stone', completed: true },
			{ description: 'Time stone' },
			{ description: 'Space stone' },
			{ description: 'Reality stone' },
			{ description: 'Power stone' },
			{ description: 'Mind stone' }
		]
	})

	console.log(todo)

	return NextResponse.json({ message: 'Seed executed' })
}
