import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { Sidebar, TopMenu } from '../components/';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {

	const session = await getServerSession(authOptions)

	if(!session)
		redirect('/api/auth/signin')

	const image = session.user?.image ?? 'https://i.pinimg.com/736x/38/1e/80/381e80eb3b05a6ad4a12530b24f554f5.jpg'
	const name = session.user?.name ?? 'Peter "Spidey" Parker'
	const roles = session.user?.roles ?? ['no-roles']

  return (
    <>    
      <Sidebar image={ image } name={ name } roles={roles} />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">        
				<TopMenu />

        <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded">
					{ children }
        </div>

      </div>
    </>
  );
}