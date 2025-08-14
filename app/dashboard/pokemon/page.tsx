import { Metadata } from "next";
import { PokemonGrid } from "@/app/pokemons/";
import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";

export const metadata: Metadata = {
	title: "Pokemons",
	description: "A simple pokemon page"
}

const getPokemons = async (limit: number = 151, offset: number = 0): Promise<SimplePokemon[]> => {
	const pokemonsResponse: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
		next: {
			revalidate: 60 * 60 * 30 * 6
		}
	})
	.then( response => response.json())

	const pokemons = pokemonsResponse.results.map( (pokemon) => {
		return {
			id: pokemon.url.split('/').at(-2)!,
			name: pokemon.name
		};
	});

	return pokemons;
}

export default async function PokemonPage() {
	const pokemons = await getPokemons();

	return (
		<div className="flex flex-col">
			<span className="text-5xl my-2">Pokemons List <small>static</small> </span>
			<PokemonGrid pokemons={pokemons} />
		</div>
	);
}