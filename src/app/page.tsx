import NavigationButton from '@/components/UI/buttons/NavButton'
import Title from '@/components/UI/title/Title'

export default function Home() {
    return (
        <div className='mx-auto w-4/5 mt-20'>
            <Title text='Home page' />

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
