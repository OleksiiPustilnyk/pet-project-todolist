import { FaCheck } from 'react-icons/fa'

type Props = {
    id: number
    isCompleted: boolean
    changeTodo: (id: number) => void
}

export default function Check({ id, changeTodo, isCompleted }: Props) {
    return (
        <button
            className={`border border-emerald-500 w-6 h-6 rounded-md mr-2 flex items-center justify-center ${isCompleted ? 'bg-emerald-500' : ''}`}
            onClick={() => changeTodo(id)}
        >
            {isCompleted && <FaCheck size={15} className='' />}
        </button>
    )
}
