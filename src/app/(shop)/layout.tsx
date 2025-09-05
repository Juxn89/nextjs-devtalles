import { TopMenu } from "@/components";

interface Props {
	children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {
	return (
		<main className="">
			<TopMenu />
			{children}
		</main>
	);
}