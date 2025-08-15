import { Metadata } from "next";
import { PokemonGrid } from "@/app/pokemons/";

export const metadata: Metadata = {
	title: "Favorites",
	description: "A simple pokemon page"
}

export default async function FavoritesPage() {

	return (
		<div className="flex flex-col">
			<span className="text-5xl my-2">Pokemons List <small className="text-blue-500">Global state</small> </span>
			<PokemonGrid pokemons={[]} />
		</div>
	);
}