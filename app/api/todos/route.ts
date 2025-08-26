import * as yup from 'yup'
import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/lib/primas';

export async function GET(request: NextRequest) { 

	const { searchParams } = request.nextUrl;
	const limit = Number(searchParams.get('limit') ?? '10');
	const offset = Number(searchParams.get('offset') ?? '0');

	if( isNaN(limit) )
		return NextResponse.json({ error: 'Limit must be a number' }, { status: 400 });

	if( isNaN(offset) )
		return NextResponse.json({ error: 'Offset must be a number' }, { status: 400 });

	if(limit < 1)
		return NextResponse.json({ error: 'Limit must be greater than or equal to 1' }, { status: 400 });

	if(offset < 0)
		return NextResponse.json({ error: 'Offset must be greater than or equal to 0' }, { status: 400 });		

	const todos = await prisma.todo.findMany({
		take: limit,
		skip: offset,
	});

	return NextResponse.json(todos);
}

const postShema = yup.object({
	description: yup.string().required(),
	completed: yup.boolean().optional().default(false)
})

export async function POST(request: NextRequest) {
	try{
		const body = await request.json();

		await postShema.validate(body);

		const { description, completed } = body;

		const todo = await prisma.todo.create({
			data: {
				description,
				completed
			}
		});

		return NextResponse.json(todo, { status: 201 });
	}
	catch(error) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}

export async function DELETE(request: NextRequest) { 

	const todosCompleted = await prisma.todo.deleteMany({
		where: {
			completed: true
		}
	});

	return NextResponse.json({ message: `${todosCompleted.count} completed todos deleted` }, { status: 200 });
}