import Link from "next/link"
import Image from 'next/image'
import { titleFonts } from "@/config/fonts"

export const PageNotFound = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
			<div className="text-center px-5 mx-5">
				<h2 className={ `${ titleFonts.className } antialiased text-9xl` }>404</h2>
				<p className="font-semibold text-xl">
					Whoops! The page you are looking for does not exist.
				</p>
				<p className="font-light">
					<span>You can go back to the </span>
					<Link href="/" className="font-normal text-blue-500 hover:underline">homepage</Link>
				</p>
			</div>
			<div className="px-5 mx-5">
				<Image
					src="/imgs/starman_750x750.png"
					alt="Starman"
					className="p-5 sm:p-0"
					width={400}
					height={400}
				/>
			</div>
		</div>
	)
}
