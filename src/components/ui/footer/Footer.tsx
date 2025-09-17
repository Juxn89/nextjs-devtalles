import { titleFonts } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
	return (
		<div className="flex w-full justify-center text-xs mb-10 gap-10">
			<Link href="/">
				<span className={ `${ titleFonts.className } antialiased font-bold` }>Teslo </span>
				<span>| shop</span>
				<span>&copy; { new Date().getFullYear() }</span>
			</Link>

			<Link href='/privacy'>
				<span>Privacy Policy & Legal</span>
			</Link>

			<Link href='/terms'>
				<span>Terms of Service</span>
			</Link>
		</div>
	)
}
