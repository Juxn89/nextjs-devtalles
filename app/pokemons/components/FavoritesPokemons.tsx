'use client'

import { IoHeartOutline } from "react-icons/io5"
import { useAppSelector } from "@/app/store"
import { PokemonGrid } from "./PokemonGrid"

export const FavoritesPokemons = () => {
	const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons.favorites))	
	
	return (
		<>
			{
				favoritesPokemons.length
				? <NoFavorites />
				: <PokemonGrid pokemons={ favoritesPokemons } /> 
			}
		</>
	)
}

export const NoFavorites = () => {
	return(
		<div	className="flex flex-col h-[50vh] items-center justify-center">
			<IoHeartOutline size={100} className="text-red-500" />
			<span>No favorites</span>
		</div>
	)
}