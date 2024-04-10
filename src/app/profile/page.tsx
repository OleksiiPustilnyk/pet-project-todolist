import ProfileForm from '@/components/Forms/ProfileForm'

export default async function ProfilePage() {
    return (
        <div className='mx-auto w-1/3 mt-20'>
            <h1 className='text-center font-bold text-xl text-emerald-500 mb-7 '>
                Profile
            </h1>
            <ProfileForm />
        </div>
    )
}
