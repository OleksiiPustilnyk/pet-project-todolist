import TodoList from '../components/TodoList'

export default function Home() {
    return (
        <div className='mx-auto w-4/5 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                TODO list
            </h1>
            <TodoList />
        </div>
    )
}
