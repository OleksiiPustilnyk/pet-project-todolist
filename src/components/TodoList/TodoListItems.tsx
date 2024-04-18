'use client'

import RemoveTodoBtn from './RemoveTodoBtn'
import ToggleTodoBtn from './ToggleTodoBtn'

type TodoItem = {
    id: number
    _id: number
    title: string
    isCompleted: boolean
}

const getTodos = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/todos', {
            cache: 'no-store',
        })

        if (!res.ok) {
            throw new Error('Failed to fetch todos')
        }

        return res.json()
    } catch (error) {
        console.log('Error loading todos: ', error)
    }
}

export default async function TodoListItems() {
    const { todos } = await getTodos()

    const handleToggleTodo = async (id: number) => {
        console.log(`Toggle todo with id: ${id}`)
    }

    return (
        <>
            {todos.map((todo: TodoItem) => (
                <div
                    className='flex justify-between mb-4 items-center bg-gray-700 rounded-xl p-5'
                    key={todo._id}
                >
                    <div className='flex items-center'>
                        <ToggleTodoBtn
                            id={todo._id}
                            isCompleted={todo.isCompleted}
                            onToggle={handleToggleTodo}
                        />
                        <div className='ml-4'>{todo.title}</div>
                    </div>
                    <RemoveTodoBtn id={todo._id} />
                </div>
            ))}
        </>
    )
}
