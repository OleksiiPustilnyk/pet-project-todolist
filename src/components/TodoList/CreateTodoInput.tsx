'use client'

import { useCreateTodo } from '../hooks/useCreateTodo'

export default function CreateTodoInput() {
    const { title, error, handleSubmit, handleChange } = useCreateTodo()

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex mb-4 items-center justify-between bg-gray-700 rounded-xl'>
                <div className='my-3 mx-5 w-full'>
                    <input
                        type='text'
                        className='bg-transparent w-full border-none focus:outline-none'
                        placeholder='Add TODO'
                        onChange={e => handleChange(e.target.value)}
                        value={title}
                    />
                    {error && <p className='text-red-500'>{error}</p>}
                </div>

                <div className='flex items-center h-full'>
                    <button className='h-full w-full bg-green-500 hover:bg-green-700 p-3 rounded-r-xl'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}
