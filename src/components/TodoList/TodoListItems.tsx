'use client'

import { useState, useEffect } from 'react'
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

export default function TodoListItems() {
    const [todos, setTodos] = useState<TodoItem[]>([])

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getTodos()
            setTodos(data.todos)
        }

        fetchTodos()
    }, [])

    const handleToggleTodo = async (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo._id === id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo
        })

        setTodos(updatedTodos)
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
                            onToggle={() => handleToggleTodo(todo._id)}
                        />
                        <div
                            className={`ml-4 ${todo.isCompleted ? 'line-through' : ''}`}
                        >
                            {todo.title}
                        </div>
                    </div>
                    <RemoveTodoBtn id={todo._id} />
                </div>
            ))}
        </>
    )
}
