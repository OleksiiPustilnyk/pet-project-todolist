'use client'

import { useState, useEffect } from 'react'
import TodoListItems from './TodoListItems'
import CreateTodoInput from './CreateTodoInput'

interface Todo {
    id: number
    title: string
    isCompleted: boolean
}

const STORAGE_KEY = 'todosData'

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem(STORAGE_KEY)
        return storedTodos ? JSON.parse(storedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const changeTodo = (id: number) => {
        setTodos((prevTodos: Todo[]) =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo,
            ),
        )
    }

    const removeTodo = (id: number) =>
        setTodos([...todos].filter(t => t.id !== id))

    const addTodo = (title: string) => {
        setTodos((prevTodos: Todo[]) => [
            ...prevTodos,
            {
                id: prevTodos.length + 1,
                title,
                isCompleted: false,
            },
        ])
    }

    return (
        <div>
            <TodoListItems
                todos={todos}
                changeTodo={changeTodo}
                removeTodo={removeTodo}
            />
            <CreateTodoInput addTodo={addTodo} />
        </div>
    )
}
