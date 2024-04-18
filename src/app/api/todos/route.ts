import { connectMongoDB } from '@/lib/mongodb'
import Todo from '@/models/todo'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { title, isCompleted } = await req.json()
        await connectMongoDB()
        await Todo.create({ title, isCompleted })

        return NextResponse.json({ message: 'Todo Created' }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}

export async function GET() {
    await connectMongoDB()
    const todos = await Todo.find()
    return NextResponse.json({ todos })
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Todo.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Todo deleted' }, { status: 200 })
}
