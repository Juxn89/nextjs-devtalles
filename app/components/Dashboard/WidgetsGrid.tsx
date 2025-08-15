'use client'

import { SimpleWidget } from "@/app/components/Dashboard/SimpleWidget";
import { useAppSelector } from "@/app/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
	const counter = useAppSelector(state => state.counter.count)

	return (
		<div className="flex flex-wrap p-2 items-center justify-center">
			<SimpleWidget 
				title={ `${counter}` } 
				subTitle="Total products"
				label="Counter"
				icon={ <IoCartOutline size={50} className="text-blue-600" /> }
				href="/dashboard/counter"
			/>
		</div>
	)
}
