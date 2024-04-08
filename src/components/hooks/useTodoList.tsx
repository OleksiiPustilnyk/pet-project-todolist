'use client'

import { useState, useEffect } from 'react'

interface Todo {
    id: number
    title: string
    isCompleted: boolean
}

const STORAGE_KEY = 'todosData'

const useTodoList = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem(STORAGE_KEY)
        return storedTodos ? JSON.parse(storedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const changeTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo,
            ),
        )
    }

    const removeTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    const addTodo = (title: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id:
                    prevTodos.length > 0
                        ? prevTodos[prevTodos.length - 1].id + 1
                        : 1,
                title,
                isCompleted: false,
            },
        ])
    }

    return { todos, changeTodo, removeTodo, addTodo }
}

export default useTodoList
