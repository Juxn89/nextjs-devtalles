import { Metadata } from "next";
import prisma from "@/lib/primas";
import { NewTodo, TodosGrid } from "@/todos/components";

export const metadata: Metadata = {
	title: 'ToDo list',
	description: 'SEO title'
}

export default async function ServerTodosPage() {

	const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

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