'use client'

import { useState } from 'react'

type Props = {
    addTodo: (title: string) => void
}

export default function CreateTodoInput({ addTodo }: Props) {
    const [title, setTitle] = useState('')

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <div className='flex mb-4 items-center bg-gray-700 rounded-xl p-3'>
            <input
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={handleKeyPress}
                className='bg-transparent w-full border-none focus:outline-none'
                placeholder='Add TODO'
            />
        </div>
    )
}
