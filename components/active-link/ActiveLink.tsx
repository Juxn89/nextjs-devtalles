'use client'

import { FC } from "react"
import Link from "next/link"
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation"

interface Props {
	path: string,
	text: string
}

export const ActiveLink: FC<Props> = ({ path, text }) => {

	const pathname = usePathname();

	return (
		<Link className={`${style.link} ${pathname === path ? style['active-link'] : ''}`} href={path}>
			{text}
		</Link>
	)
}