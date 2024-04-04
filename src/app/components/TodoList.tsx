'use client'

import { useState } from 'react'
import TodoListItems from './TodoListItems'

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

    console.log(todos)

    return <TodoListItems todos={todos} changeTodo={changeTodo} />
}
