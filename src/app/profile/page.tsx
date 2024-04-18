import ProfileForm from '@/components/Forms/ProfileForm'
import Title from '@/components/UI/title/Title'

export default async function ProfilePage() {
    return (
        <div className='mx-auto w-1/3 mt-20'>
            <Title text='Profile' />
            <ProfileForm />
        </div>
    )
}
