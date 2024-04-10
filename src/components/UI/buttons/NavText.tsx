import Link from 'next/link'

interface NavigationButtonProps {
    text: string
    path: string
}

export default function NavigationText({ text, path }: NavigationButtonProps) {
    return (
        <Link href={path}>
            <button className='text-white border-b hover:text-emerald-500 hover:border-b-emerald-500'>
                {text}
            </button>
        </Link>
    )
}
;``
