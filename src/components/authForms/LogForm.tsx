'use client'

import NavigationButton from '@/components/buttons/NavButton'
import NavigationText from '@/components/buttons/NavText'
import Input from '@/components/input/Input'
import { useState } from 'react'

export default function LogForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    return (
        <form className='flex flex-col justify-center min-w-80 m-auto gap-5 border border-gray-700 p-10 rounded-lg'>
            <Input
                onChange={e => setName(e.target.value)}
                type='email'
                name='email'
                placeholder='Email'
            >
                E-mail:
            </Input>
            <Input
                onChange={e => setEmail(e.target.value)}
                type='password'
                name='password'
                placeholder='Password'
            >
                Password:
            </Input>

            <div className='text-red-500'>Error message</div>

            <div className='flex justify-around'>
                {/* <button
                type='submit'
                className='bg-emerald-500 hover:bg-emerald-400 rounded-md py-2 px-6 my-3'
            >
                Sign In
            </button> */}
                <NavigationButton text='Sign In' path='/' color='green' />
                <NavigationButton text='Cancel' path='/' color='red' />
            </div>

            <div className='flex justify-end gap-3'>
                <p className='flex text-white items-center'>
                    Don't have an account?
                </p>
                <NavigationText text='Register' path='/register' />
            </div>
        </form>
    )
}
