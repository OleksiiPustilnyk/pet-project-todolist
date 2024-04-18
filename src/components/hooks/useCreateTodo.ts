import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const useCreateTodo = () => {
    const [title, setTitle] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async () => {
        if (!title) {
            setError('Title is required.')
            return
        }

        try {
            const res = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ title, isCompleted }),
            })

            if (res.ok) {
                router.refresh()
                setTitle('')
                setIsCompleted(false)
            } else {
                throw new Error('Failed to create a Todo')
            }
        } catch (error) {
            console.log(error)
            setError('Failed to create a Todo')
        }
    }

    const handleChange = (value: string) => {
        setTitle(value)
        setError(null)
    }

    return {
        title,
        isCompleted,
        error,
        handleSubmit,
        handleChange,
    }
}
