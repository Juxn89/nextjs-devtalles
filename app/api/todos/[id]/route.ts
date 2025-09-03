import { Todo } from "@/app/generated/prisma/wasm";
import { getUserServerSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/primas";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

interface Segments {
	params: {
		id: string;
	}
}

export async function GET(request: NextRequest, segments: Segments) {

	const { id } = await segments.params;
	const todo = await getTodo(id)

	if(!todo) {
		return NextResponse.json({
			message: 'Todo not found'
		}, { status: 404 });
	}

	return NextResponse.json({
		...todo
	});
}

const putShema = yup.object({
	completed: yup.boolean().optional(),
	description: yup.string().optional()
});

export async function PUT(request: NextRequest, segments: Segments) {
	try {
		const { id } = await segments.params;
		const todo = await getTodo(id)

		if(!todo) {
			return NextResponse.json({
				message: 'Todo not found'
			}, { status: 404 });
		}

		const body = await request.json();
		await putShema.validate(body);
		const { completed, description } = body;

		const updatedTodo = await prisma.todo.update({
			where: { id },
			data: {
				completed,
				description
			}
		});

		return NextResponse.json({
			...updatedTodo
		});		
	} catch (error) {
		return NextResponse.json({
			message: 'Error updating todo'
		}, { status: 500 });
	}
}

const getTodo = async (id: string): Promise<Todo | null> => {
	const user = await getUserServerSession();

	if(!user) return null;

	const todo = await prisma.todo.findFirst({ where: { id, userId: user.id } })

	return todo;
}
