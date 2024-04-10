interface TitleProps {
    text: string
}

export default function Title({ text }: TitleProps) {
    return (
        <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
            {text}
        </h1>
    )
}
