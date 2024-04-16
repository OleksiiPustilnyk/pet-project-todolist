import RegistrationForm from '@/components/Forms/RegForm'
import Title from '@/components/UI/title/Title'

export default async function SignUpPage() {
    return (
        <div className='mx-auto w-1/2 mt-20'>
            <Title text='Registration' />
            <RegistrationForm />
        </div>
    )
}
