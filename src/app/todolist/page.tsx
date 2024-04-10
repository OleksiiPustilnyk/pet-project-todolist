import TodoList from '@/components/TodoList/TodoList'
import NavigationButton from '@/components/UI/buttons/NavButton'

export default function TodoListPage() {
    return (
        <div className='mx-auto w-4/5 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                TODO list
            </h1>
            <TodoList />

            <NavigationButton text='Home' path='/' color='blue' />
        </div>
    )
}
