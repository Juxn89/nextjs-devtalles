import { WidgetsGrid } from "@/app/components/Dashboard/WidgetsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin Dashboard",
	description: "Overview of user activity and statistics",
};

export default function MainPage() {
	return(
		<div className="text-black">
			<h1 className="mt-2 text-3xl">Dashboard</h1>
			<span className="text-sm text-gray-500">Overview section</span>

			<WidgetsGrid />
		</div>
	)	
}