import { Metadata } from "next";
import { cookies } from "next/headers";
import { TabBar } from "@/app/components/TabBar";

export const metadata: Metadata = {
	title: "Cookies",
	description: "Manage your cookies"
}

export default async function CookiePage() {
	const cookieStore = await cookies();
	const cookieTab = cookieStore.get("selectedTab")?.value ?? '1';

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
			<div className="flex flex-col">
				<span className="text-3xl">Tabs</span>
				<TabBar currentTab={ +cookieTab } />
			</div>
		</div>
	);
}

