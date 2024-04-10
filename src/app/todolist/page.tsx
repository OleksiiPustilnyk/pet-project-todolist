import TodoList from '@/components/TodoList/TodoList'
import NavigationButton from '@/components/UI/buttons/NavButton'
import Title from '@/components/UI/title/Title'

export default function TodoListPage() {
    return (
        <div className='mx-auto w-4/5 mt-20'>
            <Title text='TODO list' />
            <TodoList />

            <NavigationButton text='Home' path='/' color='blue' />
        </div>
    )
}
