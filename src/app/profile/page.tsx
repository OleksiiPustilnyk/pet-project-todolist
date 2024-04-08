import NavigationButton from '@/components/buttons/NavButton'

export default function ProfilePage() {
    return (
        <div className='mx-auto w-1/3 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                Profile
            </h1>
            <form className='flex flex-col justify-center min-w-80 m-auto gap-5 border border-gray-700 p-10 rounded-lg'>
                <div>
                    Name:<span className='font-bold ml-3'>Alex</span>
                </div>
                <div>
                    Email:<span className='font-bold ml-3'>alex@gmail.com</span>
                </div>
                <div className='flex justify-center'>
                    <NavigationButton text='Log out' path='/' color='red' />
                </div>
            </form>
        </div>
    )
}
