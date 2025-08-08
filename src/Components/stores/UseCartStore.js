import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((p) => {
        return p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p;
      });
      set({
        cart: updatedCart,
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }],
      });
    }
  },
  removeFromCart: (id) => {
    const cart = get().cart;
    const existingProduct = cart.find((product) => product.id === id);

    if (!existingProduct) return;

    if (existingProduct.quantity > 1) {
      const updatedCart = cart.map((p) => {
        return p.id === id ? { ...p, quantity: p.quantity - 1 } : p;
      });
      set({
        cart: updatedCart,
      });
    } else {
      set({
        cart: cart.filter((product) => product.id !== id),
      });
    }
  },
  removeProduct: (id) => {
    const cart = get().cart;
    const exists = cart.find((product) => product.id === id);

    if (exists) {
      set({
        cart: cart.filter((product) => product.id !== id),
      });
    }
  },
  resetCart: () =>
    set({
      cart: [],
    }),
}));
