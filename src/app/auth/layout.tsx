import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

interface Props {
	children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {

	const currentSession = await auth()

	if(currentSession?.user)
		redirect('/')

	return (
		<main className="flex justify-center">
			<div className="w-full sm:w-[350px] px-10">
				{ children }
			</div>
		</main>
	);
}