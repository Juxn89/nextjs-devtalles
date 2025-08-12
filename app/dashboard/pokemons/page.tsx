import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Pokemons",
	description: "A simple pokemon page"
}

const getPokemons = async (limit: number = 151, offset: number = 0): Promise<SimplePokemon[]> => {
	const pokemonsResponse: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
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
			<div className="flex flex-wrap gap-10 items-center justify-center">
				{pokemons.map((pokemon) => (
					<Image 
						src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg` }
						width={ 100 }
						height={ 100 }
						alt={ pokemon.name }
						key={ pokemon.id }
					/>
				))}
			</div>
		</div>
	);
}