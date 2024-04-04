import Check from './items/Check'

type TodoItem = {
    id: number
    title: string
    isCompleted: boolean
}

type Props = {
    todos: TodoItem[]
    changeTodo: (id: number) => void
}

export default function TodoListItems({ todos, changeTodo }: Props) {
    return (
        <>
            {todos.map(todo => (
                <div className='flex mb-4 items-center' key={todo.id}>
                    <Check
                        id={todo.id}
                        changeTodo={changeTodo}
                        isCompleted={todo.isCompleted}
                    />
                    <div>{todo.title}</div>
                </div>
            ))}
        </>
    )
}
