import { create } from "zustand";
import { CartProduct } from "@/interfaces/product.interface";

interface State {
	cart: CartProduct[];
	addToCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
	(set, get) => ({
		cart: [],
		addToCart: (product: CartProduct) => {
			const { cart } = get();

			const productInCart = cart.some((item: CartProduct) => (item.id === product.id && item.size === product.size	));

			if(!productInCart) {
				set({ cart: [...cart, product] });
				return;
			}

			const updatedCartProducts = cart.map((item: CartProduct) => {
				if(item.id === product.id && item.size === product.size) {
					return {
						...item,
						quantity: item.quantity + product.quantity
					}
				}
				return item;
			})

			set({ cart: updatedCartProducts });
		}
	}
))