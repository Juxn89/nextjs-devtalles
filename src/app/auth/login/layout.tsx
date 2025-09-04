interface Props {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
	return (
		<main className="bg-gray-500 min-h-screen">
			{children}
		</main>
	);
}