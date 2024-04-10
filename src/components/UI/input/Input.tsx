type Props = {
    children: string
    placeholder: string
    type: string
    name: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ children, type, name, placeholder, onChange }: Props) => {
    return (
        <label className='w-full flex justify-between items-center'>
            <span>{children}</span>
            <input
                onChange={onChange}
                type={type}
                name={name}
                placeholder={placeholder}
                required
                className='gap-2 bg-transparent border px-5 py-3 rounded-md text-sm  border-b border-gray-300 focus:outline-none focus:border-emerald-500 placeholder-gray-500 w-3/4'
            />
        </label>
    )
}
export default Input
