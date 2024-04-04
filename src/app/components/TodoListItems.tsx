import Check from './items/Check'
import Trash from './items/Trash'

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
    return (
        <>
            {todos.map(todo => (
                <div
                    className='flex justify-between mb-4 items-center bg-gray-700 rounded-xl p-5 '
                    key={todo.id}
                >
                    <div className='flex'>
                        <Check
                            id={todo.id}
                            changeTodo={changeTodo}
                            isCompleted={todo.isCompleted}
                        />
                        <div>{todo.title}</div>
                    </div>

                    <Trash id={todo.id} removeTodo={removeTodo} />
                </div>
            ))}
        </>
    )
}
