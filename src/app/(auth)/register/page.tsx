import RegistrationForm from '@/components/Forms/RegForm'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function SignUpPage() {
    const session = await getServerSession(authOptions)

    if (session) redirect('/profile')
    return (
        <div className='mx-auto w-1/2 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                Registration
            </h1>
            <RegistrationForm />
        </div>
    )
}
