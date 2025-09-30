import { auth } from '@/auth.config'
import { Title } from '@/components'
import { redirect } from 'next/navigation'

export const ProfilePage = async () => {
	const currentSession = await auth()

	if(!currentSession?.user)
		redirect('/')

	return (
		<div>
			<Title title='Profile' />
			<pre>
				{
					JSON.stringify( currentSession.user, null, 2 )
				}
			</pre>
		</div>
	)
}

export default ProfilePage