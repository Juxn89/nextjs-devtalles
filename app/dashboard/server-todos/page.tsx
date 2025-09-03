export const dynamic = 'auto'
export const revalidate = 0

import { Metadata } from "next";
import prisma from "@/lib/primas";
import { NewTodo, TodosGrid } from "@/todos/components";
import { getUserServerSession } from "@/auth/actions/auth-actions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: 'ToDo list',
	description: 'SEO title'
}

export default async function ServerTodosPage() {

	const user = await getUserServerSession()

	console.log(user)

	if(!user)
		redirect('/api/auth/signin')

	console.log(user)

	const todos = await prisma.todo.findMany({ where: { userId: user.id }, orderBy: { description: 'asc' } })

	return (
		<>
			<span className="text-3xl mb-10">Server Actions</span>
			<div className="w-full px-3 mx-5 mb-5">
				<NewTodo />
			</div>

			<TodosGrid todos={todos}/>
		</> 
	);
}