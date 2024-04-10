'use client'

import NavigationButton from '@/components/buttons/NavButton'
import NavigationText from '@/components/buttons/NavText'
import Input from '@/components/input/Input'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ControlButton from '../buttons/ControlButton'

export default function LogForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (res && res.error) {
                setError('Invalid Credentials')
                return
            }

            router.replace('profile')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-center min-w-80 m-auto gap-5 border border-gray-700 p-10 rounded-lg'
        >
            <Input
                onChange={e => setEmail(e.target.value)}
                type='email'
                name='email'
                placeholder='Email'
            >
                E-mail:
            </Input>
            <Input
                onChange={e => setPassword(e.target.value)}
                type='password'
                name='password'
                placeholder='Password'
            >
                Password:
            </Input>

            {error && <div className='text-red-500'>{error}</div>}

            <div className='flex justify-around'>
                <ControlButton text='Sign In' color='green' />

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
