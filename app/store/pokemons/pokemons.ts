import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';
import { stat } from 'fs';

interface PokemonsState {
	favorites: {
		[key: string]: SimplePokemon
	}	
}

const getInitialStateFromLocalStorage = (): PokemonsState => {
	const storedFavorites = JSON.parse( localStorage.getItem('favorites-pokemons') ?? "{}" );

	return storedFavorites
}

const initialState: PokemonsState = {
	favorites: { }
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavoritesPokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon } >) {
			state.favorites = action.payload
		},
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload
			const { id } = pokemon

			if(state.favorites[id]) {
				delete state.favorites[id]
			}
			else {
				state.favorites[id] = pokemon
			}

			localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites))
		}
	}
});

export const { toggleFavorite, setFavoritesPokemons } = favoritesSlice.actions

export default favoritesSlice.reducer