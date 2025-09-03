'use server'

import { getUserServerSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/primas";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

const sleep = async(seconds: number) => {
	return new Promise(resolve => setTimeout(() => {
		resolve(true)
	}, seconds * 1000));
}

export const toggleTodo = async(id: string, completed: boolean): Promise<Todo> => {
	await sleep(3);
	const todo = await prisma.todo.findFirst({ where: { id } })

	if(!todo) throw new Error('Todo not found')

	const updatedTodo = await prisma.todo.update({
		where: { id },
		data: { completed }
	})

	revalidatePath(`/dashboard/server-todo`)

	return updatedTodo
}

export const addTodo = async(description: string): Promise<Todo> => {
	const user = await getUserServerSession()

	if(!user) throw new Error('User not found')

	const newTodo = await prisma.todo.create({
		data: {
			description,
			userId: user.id
		}
	})

	revalidatePath(`/dashboard/server-todo`)

	return newTodo
}

export const deleteCompleted = async (): Promise<void> => {
	await prisma.todo.deleteMany({
		where: {
			completed: true
		}
	})

	revalidatePath(`/dashboard/server-todo`)
}