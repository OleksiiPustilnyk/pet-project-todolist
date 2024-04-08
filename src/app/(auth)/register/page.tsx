import NavigationButton from '@/components/buttons/NavButton'
import NavigationText from '@/components/buttons/NavText'
import Input from '@/components/input/Input'

export default function SignUpPage() {
    return (
        <div className='mx-auto w-1/2 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                Registration
            </h1>
            <form className='flex flex-col justify-center min-w-80 m-auto gap-5 border border-gray-700 p-10 rounded-lg'>
                <Input type='name' name='name' placeholder='Name'>
                    Full Name:
                </Input>
                <Input type='email' name='email' placeholder='Email'>
                    E-mail:
                </Input>
                <Input type='password' name='password' placeholder='Password'>
                    Password:
                </Input>

                <div className='flex justify-around'>
                    <NavigationButton text='Sign In' path='/' color='green' />
                    <NavigationButton text='Cancel' path='/' color='red' />
                </div>

                <div className='flex justify-end gap-3'>
                    <p className='flex text-white items-center'>
                        Already have an account?
                    </p>
                    <NavigationText text='Login' path='/login' />
                </div>
            </form>
        </div>
    )
}
