'use client'

import { useState } from 'react'
import TodoListItems from './TodoListItems'
import CreateTodoInput from './CreateTodoInput'

const data = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quam',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        isCompleted: false,
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur',
        isCompleted: false,
    },
]

export default function TodoList() {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo,
            ),
        )
    }

    const removeTodo = (id: number) =>
        setTodos([...todos].filter(t => t.id !== id))

    let nextId = 4

    const generateUniqueId = (): number => {
        return nextId++
    }

    const addTodo = (title: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: generateUniqueId(),
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
