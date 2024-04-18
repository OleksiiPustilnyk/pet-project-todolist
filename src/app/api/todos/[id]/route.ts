import { connectMongoDB } from '@/lib/mongodb'
import Todo from '@/models/todo'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } },
) {
    const { id } = params
    await connectMongoDB()
    const todo = await Todo.findOne({ _id: id })

    if (!todo) {
        return NextResponse.json({ message: 'Todo not found' }, { status: 404 })
    }

    return NextResponse.json({ todo }, { status: 200 })
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string }; body: { isCompleted: boolean } },
) {
    try {
        const { id } = params
        const { isCompleted } = await req.json()
        await connectMongoDB()
        await Todo.findByIdAndUpdate(id, { isCompleted })

        return NextResponse.json({ message: 'Todo updated' }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: 'Error updating todo' },
            { status: 500 },
        )
    }
}
