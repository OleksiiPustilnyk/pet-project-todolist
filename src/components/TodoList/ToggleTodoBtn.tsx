import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

type ToggleTodoBtnProps = {
    id: number
    isCompleted: boolean
    onToggle: (id: number, isCompleted: boolean) => void
}

export default function ToggleTodoBtn({
    id,
    isCompleted,
    onToggle,
}: ToggleTodoBtnProps) {
    const [iconColor, setIconColor] = useState<string>(
        isCompleted ? 'green' : 'gray',
    )

    const handleToggle = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ isCompleted: !isCompleted }),
            })

            if (res.ok) {
                onToggle(id, !isCompleted)
                setIconColor(prevColor =>
                    prevColor === 'green' ? 'gray' : 'green',
                )
            } else {
                throw new Error('Failed to toggle todo')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button onClick={handleToggle}>
            <FaCheck color={iconColor} />
        </button>
    )
}
