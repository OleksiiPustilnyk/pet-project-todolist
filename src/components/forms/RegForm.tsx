'use client'

import NavigationButton from '@/components/buttons/NavButton'
import NavigationText from '@/components/buttons/NavText'
import Input from '@/components/input/Input'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegistrationForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError('All fields are necessary.')
            return
        }

        try {
            const resUserExists = await fetch('api/userExist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            const { user } = await resUserExists.json()

            if (user) {
                setError('User already exists.')
                return
            }

            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            })

            if (res.ok && res.status === 201) {
                const form = e.target as HTMLFormElement
                form.reset()
                router.push('/login')
            } else {
                setError('User registration failed.')
            }
        } catch (error) {
            console.log('Error during registration', error)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-center min-w-80 m-auto gap-5 border border-gray-700 p-10 rounded-lg'
        >
            <Input
                onChange={e => setName(e.target.value)}
                type='name'
                name='name'
                placeholder='Name'
            >
                Full Name:
            </Input>
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
                <button
                    type='submit'
                    className='bg-emerald-500 hover:bg-emerald-400 rounded-md py-2 px-6 my-3'
                >
                    Submit
                </button>
                <NavigationButton text='Cancel' path='/' color='red' />
            </div>

            <div className='flex justify-end gap-3'>
                <p className='flex text-white items-center'>
                    Already have an account?
                </p>
                <NavigationText text='Login' path='/login' />
            </div>
        </form>
    )
}
