import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react"

import { ActiveLink } from "@/components/";

const navItems: Array<{ href: string; label: string }> = [
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/pricing", label: "Pricing" },
]

export const Navbar = () => {
	return (
		<nav className="flex bg-blue-800/30 p-2 m-2 rounded">
			<Link href="/" className="flex items-center">
				<HomeIcon className="mr-2" />
				<span>Home</span>
			</Link>

			<div className="flex-1"></div>

			{navItems.map((item) => (
				<ActiveLink key={item.href} path={item.href} text={item.label} />
			))}
		</nav>
	)
}