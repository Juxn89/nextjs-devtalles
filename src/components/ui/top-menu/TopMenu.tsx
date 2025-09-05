import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { titleFonts } from "@/config/fonts"

export const TopMenu = () => {
	return (
		<nav className="flex px-5 justify-between items-center w-full">
			<div>
				<Link href={"/shop"}>
					<span className={ `${ titleFonts.className } antialiased font-bold` }>Teslo</span>
					<span>| Shop</span>
				</Link>
			</div>

			<div className="hidden sm:block">
				<Link href={"/category/men"} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Men</Link>
				<Link href={"/category/women"} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Women</Link>
				<Link href={"/category/kids"} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Kids</Link>
			</div>

			<div className="flex items-center">
				<Link href={"/search"} className="mx-2">
					<IoSearchOutline className="w-5 h-5"/>
				</Link>
				<Link href={"/cart"} className="mx-2">
					<div className="relative">
						<span className="absolute -top-2 -right-2 bg-blue-700 text-white rounded-full px-1 text-xs">3</span>
						<IoCartOutline className="w-5 h-5"/>
					</div>
				</Link>

				<button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
					Menu
				</button>
			</div>

		</nav>
	)
}
