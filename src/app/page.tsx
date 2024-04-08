import NavigationButton from '@/components/buttons/NavButton'

export default function Home() {
    return (
        <div className='mx-auto w-4/5 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                Home page
            </h1>

            <div className='flex justify-around'>
                <NavigationButton
                    text='Go to TodoList'
                    path='/todolist'
                    color='yellow'
                />

                <NavigationButton text='Login' path='/login' color='blue' />
            </div>
        </div>
    )
}
