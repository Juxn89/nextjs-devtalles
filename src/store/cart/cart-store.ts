import { create } from "zustand";
import { CartProduct } from "@/interfaces/product.interface";
import { persist } from "zustand/middleware";

interface State {
	cart: CartProduct[];
	addToCart: (product: CartProduct) => void;
	getTotalItems: () => number;
	updateProductQuantity: (product: CartProduct, quantity: number) => void;
	removeProduct: (product: CartProduct) => void;
	getSummaryInformation: () => {	
		subTotal: number,
		totalTax: number,
		total: number,
		totalItemsInCart: number,
	};
}

const TAX_RATE = 0.15

export const useCartStore = create<State>()(
	persist(
		(set, get) => ({
			cart: [],
			addToCart: (product: CartProduct) => {
				const { cart } = get();

				const productInCart = cart.some(
					(item: CartProduct) =>
						item.id === product.id && item.size === product.size
				);

				if (!productInCart) {
					set({ cart: [...cart, product] });
					return;
				}

				const updatedCartProducts = cart.map((item: CartProduct) => {
					if (item.id === product.id && item.size === product.size) {
						return {
							...item,
							quantity: item.quantity + product.quantity,
						};
					}
					return item;
				});

				set({ cart: updatedCartProducts });
			},
			getTotalItems: () => {
				const { cart } = get();
				return cart.reduce((total, item) => total + item.quantity, 0);
			},
			updateProductQuantity: (product: CartProduct, quantity: number) => {
				const { cart } = get()
				const updatedCart = cart.map(item => {
					if(item.id === product.id && item.size === product.size) {
						return {
							...item,
							quantity
						}
					}

					return item
				})

				set({ cart: updatedCart })
			},
			removeProduct: (product: CartProduct) => {
				const { cart } = get()
				const updatedCart = cart.filter(item => item.id !== product.id || item.size !== product.size)
				set({ cart: updatedCart })
			},
			getSummaryInformation: () => {
				const { cart } = get()
				const subTotal = cart.reduce((subTotal, product) => subTotal + (product.quantity * product.price), 0)

				const totalTax = subTotal * TAX_RATE
				const total = subTotal + totalTax
				const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

				return {
					subTotal,
					totalTax,
					total,
					totalItemsInCart
				}
			}
		}),
		{
			name: "cart-storage",
		}
	)
);
