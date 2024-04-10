import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import { SessionOptions } from 'next-auth'
import { connectMongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

const authOptions = {
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(credentials) {
                const { email, password } = credentials

                try {
                    await connectMongoDB()
                    const user = await User.findOne({ email })

                    if (!user) {
                        return null
                    }

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password,
                    )

                    if (!passwordMatch) {
                        return null
                    }

                    return user
                } catch (error) {
                    console.log('Error', error)
                }
            },
        }),
    ],
    session: {
        jwt: true,
    } as unknown as SessionOptions, // ??

    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
