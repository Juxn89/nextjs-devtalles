export const dynamic = 'auto' // enable dynamic rendering, it will re-render on every request
export const revalidate = 0 // revalidate every request, it will always fetch fresh data

import { Metadata } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/primas";
import { NewTodo, TodosGrid } from "@/todos/components";
import { getUserServerSession } from "@/auth/actions/auth-actions";

export const metadata: Metadata = {
	title: 'ToDo list',
	description: 'SEO title'
}

export default async function RestTodosPage() {

		const user = await getUserServerSession()

	if(!user)
		redirect('/api/auth/signin')

	const todos = await prisma.todo.findMany({ where: { userId: user.id }, orderBy: { description: 'asc' } })

	return (
		<div>
			<div className="w-full px-3 mx-5 mb-5">
				<NewTodo />
			</div>

			<TodosGrid todos={todos}/>
		</div> 
	);
}