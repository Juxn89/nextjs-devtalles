import Link from "next/link";

export default function Home() {
  return (
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<span className="text-2xl">Hello World!</span>

			<Link href="/about">About</Link>
		</main>
  );
}
