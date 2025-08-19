'use client'

import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '.'
import { setFavoritesPokemons } from './pokemons/pokemons'

interface Props {
	children: React.ReactNode
}

export const Providers = ({ children }: Props) => {

	useEffect(() => {
		const storedFavorites = JSON.parse( localStorage.getItem('favorites-pokemons') ?? "{}" );
		store.dispatch( setFavoritesPokemons(storedFavorites) )
	}, [])
	

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}
