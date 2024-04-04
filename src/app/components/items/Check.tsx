import { FaCheck } from 'react-icons/fa'

type Props = {
    id: number
    isCompleted: boolean
    changeTodo: (id: number) => void
}

export default function Check({ id, changeTodo, isCompleted }: Props) {
    return (
        <button
            className='border w-6 h-6 rounded-md mr-2'
            onClick={() => changeTodo(id)}
        >
            {isCompleted && <FaCheck size={20} className='' />}
        </button>
    )
}
