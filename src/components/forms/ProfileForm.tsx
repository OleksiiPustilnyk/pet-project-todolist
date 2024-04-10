'use client'

// import NavigationButton from '@/components/buttons/NavButton'
import { useSession, signOut } from 'next-auth/react'

export default function ProfileForm() {
    const { data: session } = useSession()
    return (
        <form className='flex flex-col justify-center min-w-80 m-auto gap-5 border border-gray-700 p-10 rounded-lg'>
            <div>
                Name:
                <span className='font-bold ml-3'>{session?.user?.name}</span>
            </div>
            <div>
                Email:
                <span className='font-bold ml-3'>{session?.user?.email}</span>
            </div>
            <div className='flex justify-center'>
                <button
                    // type='submit'
                    onClick={() => signOut()}
                    className='bg-red-500 hover:bg-red-400 rounded-md py-2 px-6 my-3'
                >
                    Log out
                </button>
                {/* <NavigationButton text='Log out' path='/' color='red' /> */}
            </div>
        </form>
    )
}
