'use client'

import { Todo } from "@prisma/client"
import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"
import { startTransition, useOptimistic } from "react"

interface Props {
	todo: Todo,
	toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>
}

export const TodoItem = ({todo, toggleTodo}: Props) => {
	const [optimisticTodo, setOptimisticTodo] = useOptimistic(
		todo,
		(state, newCompletedValue: boolean) => {
			return { ...state, completed: newCompletedValue }
		}
	)

	const onToggleTodo = async() => {
		try {
			startTransition( () => setOptimisticTodo(!optimisticTodo.completed) )
			
			await toggleTodo(optimisticTodo.id, !optimisticTodo.completed)
		} catch (error) {
			console.error(error)
			startTransition( () => setOptimisticTodo(!optimisticTodo.completed) )
		}
	}

	return (
		<div className={ optimisticTodo.completed ? styles.todoDone : styles.todoPending }>
			<div className="flex flex-col sm:flex-row justify-start items-center gap-4">
				<div
					// onClick={ () => toggleTodo(optimisticTodo.id, !optimisticTodo.completed) }
					onClick={ onToggleTodo }
					className={`
						flex p-2 rounded-md cursor-pointer hover:bg-opacity-60
						${ optimisticTodo.completed ? 'bg-blue-100': 'bg-red-100' }
					`}>
					{
						optimisticTodo.completed 
						? <IoCheckboxOutline size={30} />
						: <IoSquareOutline size={30} />
					}
				</div>

				<div className="text-center sm:text-left">
					{ optimisticTodo.description }
				</div>
			</div>
		</div>
	)
}
