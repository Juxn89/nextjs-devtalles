export default function AboutLayout({ children } : { children: React.ReactNode }) {
	return (
		<main className="flex flex-col items-center p-24">
			<span className="text-lg">Hello world</span>
			<span className="text-7xl">About Page</span>
			{ children }
		</main>
	)
}
