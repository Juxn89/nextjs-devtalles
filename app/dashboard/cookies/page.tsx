import { TabBar } from "@/app/components/TabBar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cookies",
	description: "Manage your cookies"
}

export default function CookiePage() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
			<div className="flex flex-col">
				<span className="text-3xl">Tabs</span>
				<TabBar />
			</div>
		</div>
	);
}

