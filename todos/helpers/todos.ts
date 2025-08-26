import { Todo } from "@prisma/client";

const sleep = (seconds: number = 0): Promise<boolean> => {
	return new Promise((resolve) => {
		setTimeout( () => {
			resolve(true);
		}, seconds * 1000)
	});
}

export const createTodo = async (description: string): Promise<Todo> => {
	const body = { description }

	const todo = await fetch(`/api/todos/`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())

	return todo

}

export const updateTodo = async (id: string, completed: boolean): Promise<Todo> => {
	await sleep(2);

	const body = { completed }

	const todo = await fetch(`/api/todos/${ id }`, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())

	return todo
}

export const deleteTodoCompleted = async (): Promise<void> => {
	const todosCompleted = await fetch(`/api/todos/`, {
		method: 'DELETE'
	})
	.then(response => response.json());

	return todosCompleted
}