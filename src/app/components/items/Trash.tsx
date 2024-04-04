import { FaTrashAlt } from 'react-icons/fa'

type Props = {
    id: number
    removeTodo: (id: number) => void
}

export default function Trash({ id, removeTodo }: Props) {
    return (
        <button
            className=' w-6 h-6  mr-2 flex items-center justify-center'
            onClick={() => removeTodo(id)}
        >
            <FaTrashAlt size={15} className='text-red-500' />
        </button>
    )
}
