import RegistrationForm from '@/components/Forms/RegForm'
import Title from '@/components/UI/title/Title'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function SignUpPage() {
    const session = await getServerSession(authOptions)

    if (session) redirect('/profile')
    return (
        <div className='mx-auto w-1/2 mt-20'>
            <Title text='Registration' />
            <RegistrationForm />
        </div>
    )
}
