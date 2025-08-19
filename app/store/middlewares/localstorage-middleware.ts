import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch<Action>) => (action: Action) => {
		next(action);

		if(action.type === 'favorites/toggleFavorite') {
			const { pokemons } = state.getState() as RootState;
			localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons));
			return;
		}
	}
}