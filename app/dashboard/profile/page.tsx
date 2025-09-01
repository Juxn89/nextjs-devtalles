'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {

	const { data: session } = useSession()

	useEffect(() => {
		console.log('CSR')
	}, [])
	

	return (
		<div>
			<h1>Hello Page</h1>
			<hr />
			<div className="flex flex-col">
				<span> { session?.user?.name ?? 'No name' } </span>
				<span> { session?.user?.image ?? 'No image' } </span>
				<span> { session?.user?.email ?? 'No email' } </span>
			</div>
			<div className="flex justify-center mt-5">
				<iframe src="https://www.youtube.com/embed/6jM_0wDOw4g" width={500} height={300} loading="lazy" title="Are React client components bad?"></iframe>
			</div>
		</div>
	);
}