export const dynamic = 'auto'
export const revalidate = 0

import { Metadata } from "next";
import prisma from "@/lib/primas";
import { NewTodo, TodosGrid } from "@/todos/components";

export const metadata: Metadata = {
	title: 'ToDo list',
	description: 'SEO title'
}

export default async function RestTodosPage() {

	const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

	return (
		<div>
			<div className="w-full px-3 mx-5 mb-5">
				<NewTodo />
			</div>

			<TodosGrid todos={todos}/>
		</div> 
	);
}