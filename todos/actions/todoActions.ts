'use server'

import prisma from "@/lib/primas";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async(id: string, completed: boolean): Promise<Todo> => {

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
	const newTodo = await prisma.todo.create({
		data: {
			description
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