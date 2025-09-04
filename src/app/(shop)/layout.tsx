interface Props {
	children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {
	return (
		<main className="bg-red-500 min-h-screen">
			{children}
		</main>
	);
}