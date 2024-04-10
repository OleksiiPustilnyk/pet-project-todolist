'use client'

import { useEffect } from 'react'
import TodoListItems from './TodoListItems'
import CreateTodoInput from './CreateTodoInput'
import useTodoList from '../hooks/useTodoList'

const STORAGE_KEY = 'todosData'

export default function TodoList() {
    const { todos, changeTodo, removeTodo, addTodo } = useTodoList()

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

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
