import LogForm from '@/components/Forms/LogForm'
import Title from '@/components/UI/title/Title'

export default async function SignInPage() {
    return (
        <div className='mx-auto w-1/2 mt-20'>
            <Title text='Welcome' />
            <LogForm />
        </div>
    )
}
