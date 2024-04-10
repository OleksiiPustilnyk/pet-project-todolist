import React from 'react'
import { IconType } from 'react-icons/lib'

type ButtonProps<T> = {
    id: number
    onClick: (id: number) => void
    icon: IconType
    color: string
}

export default function ActionButton<T>({
    id,
    onClick,
    icon: Icon,
    color,
}: ButtonProps<T>) {
    return (
        <button
            className={`w-6 h-6  flex items-center justify-center text-${color}-500`}
            onClick={() => onClick(id)}
        >
            <Icon size={15} />
        </button>
    )
}
