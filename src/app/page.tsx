import TodoList from './components/TodoList'

export default function Home() {
    return (
        <div className='mx-auto w-4/5'>
            <h1 className='text-center font-bold text-xl'>TODO list</h1>
            <TodoList />
        </div>
    )
}
