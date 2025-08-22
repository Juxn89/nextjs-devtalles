import { Metadata } from "next";
import prisma from "@/lib/primas";
import { TodosGrid } from "@/todos/components";

export const metadata: Metadata = {
	title: 'ToDo list',
	description: 'SEO title'
}

export default async function RestTodosPage() {

	const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

	return (
		<div>
			<TodosGrid todos={todos}/>
		</div> 
	);
}