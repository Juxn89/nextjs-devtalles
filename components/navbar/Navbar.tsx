import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

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
				<Link key={item.href} className="mr-2" href={item.href}>
					{item.label}
				</Link>
			))}
		</nav>
	)
}