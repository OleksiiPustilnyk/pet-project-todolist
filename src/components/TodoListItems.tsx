import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import ActionButton from './buttons/ActionButton'

type TodoItem = {
    id: number
    title: string
    isCompleted: boolean
}

type Props = {
    todos: TodoItem[]
    changeTodo: (id: number) => void
    removeTodo: (id: number) => void
}

export default function TodoListItems({
    todos,
    changeTodo,
    removeTodo,
}: Props) {
    const handleDelete = (id: number) => {
        removeTodo(id)
    }

    const handleToggleComplete = (id: number) => {
        changeTodo(id)
    }

    console.log(todos)

    return (
        <>
            {todos.map(todo => (
                <div
                    className='flex justify-between mb-4 items-center bg-gray-700 rounded-xl p-5'
                    key={todo.id}
                >
                    <div className='flex'>
                        <div
                            className={`border border-emerald-500 w-6 h-6 rounded-md mr-2 flex items-center justify-center ${todo.isCompleted ? 'bg-emerald-500' : ''}`}
                        >
                            <ActionButton
                                id={todo.id}
                                onClick={handleToggleComplete}
                                icon={FaCheck}
                                color='white'
                            />
                        </div>

                        <div>{todo.title}</div>
                    </div>
                    <ActionButton
                        id={todo.id}
                        onClick={handleDelete}
                        icon={FaTrashAlt}
                        color='red'
                    />
                </div>
            ))}
        </>
    )
}
