import LogForm from '@/components/authForms/LogForm'

export default function SignInPage() {
    return (
        <div className='mx-auto w-1/2 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                Welcome
            </h1>
            <LogForm />
        </div>
    )
}
