'use client'

import { useSession, signOut } from 'next-auth/react'
import ControlButton from '../UI/buttons/ControlButton'

export default function ProfileForm() {
    const { data: session } = useSession()

    const handleSignOut = () => {
        signOut({ callbackUrl: '/' })
    }
    return (
        <div className='flex flex-col justify-center min-w-80 m-auto gap-5 border border-gray-700 p-10 rounded-lg'>
            <div>
                Name:
                <span className='font-bold ml-3'>{session?.user?.name}</span>
            </div>
            <div>
                Email:
                <span className='font-bold ml-3'>{session?.user?.email}</span>
            </div>
            <div className='flex justify-center'>
                <ControlButton
                    text='Log out'
                    color='red'
                    onClick={handleSignOut}
                />
            </div>
        </div>
    )
}
