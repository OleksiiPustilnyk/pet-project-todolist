import mongoose, { Schema } from 'mongoose'

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
)

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema)

export default Todo
