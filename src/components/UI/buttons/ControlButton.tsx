import { cn } from '@/utils/cn'

interface ControlButtonProps {
    text: string
    color: string
    onClick?: () => void
}

export default function ControlButton({
    text,
    color,
    onClick,
}: ControlButtonProps) {
    return (
        <button
            onClick={onClick}
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
    )
}
