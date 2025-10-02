import { titleFonts } from "@/config/fonts";
import { RegisterForm } from "./RegisterForm";

export const NewAccount = () => {
	return (
		<div className="flex flex-col min-h-screen pt-32 sm:pt-52">
			<h1 className={`${titleFonts.className} text-4xl mb-5`}>Ingresar</h1>

			<RegisterForm />
		</div>
	)
}

export default NewAccount;