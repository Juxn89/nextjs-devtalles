import { titleFonts } from "@/config/fonts";

export default function Home() {
  return (
		<div className="">
			<h1>Hello world</h1>
			<h1 className={ `${titleFonts.className}` }>Hello world</h1>
			<h1 className={ `${titleFonts.className} font-bold` }>Hello world</h1>
		</div>
  );
}
