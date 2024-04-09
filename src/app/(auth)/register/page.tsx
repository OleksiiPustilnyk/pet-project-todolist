import RegistrationForm from '@/components/authForms/RegForm'

export default function SignUpPage() {
    return (
        <div className='mx-auto w-1/2 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                Registration
            </h1>
            <RegistrationForm />
        </div>
    )
}
