import { cn } from '@/app/utils/cn'
import Link from 'next/link'

interface NavigationButtonProps {
    text: string
    path: string
    color: string
}

export default function NavigationButton({
    text,
    path,
    color,
}: NavigationButtonProps) {
    return (
        <Link href={path}>
            <button
                className={cn(
                    ` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`,
                    color === 'red' && 'bg-red-500 hover:bg-red-700',
                    color === 'green' && 'bg-emerald-500 hover:bg-emerald-700',
                    color === 'blue' && 'bg-blue-500 hover:bg-blue-700',
                    color === 'yellow' && 'bg-amber-400 hover:bg-amber-600',
                )}
            >
                {text}
            </button>
        </Link>
    )
}
;``
