'use client'

import { useRouter } from 'next/navigation'
import { FaTrashAlt } from 'react-icons/fa'

type RemoveTodoProps = {
    id: number
}

export default function RemoveTodoBtn({ id }: RemoveTodoProps) {
    const router = useRouter()

    const removeTodo = async () => {
        const confirmed = confirm('Are you sure?')

        if (confirmed) {
            const res = await fetch(
                `http://localhost:3000/api/todos?id=${id}`,
                {
                    method: 'DELETE',
                },
            )

            if (res.ok) {
                router.refresh()
            }
        }
    }
    return (
        <>
            <button onClick={removeTodo}>
                <FaTrashAlt color='red' />
            </button>
        </>
    )
}
