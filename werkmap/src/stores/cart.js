import {defineStore} from "pinia";

export const cartStore = defineStore('cart', {
    state: () => ({
        products: [],
    }),
    actions: {
        addToCart(product, quantity) {
            this.products = [...this.products, { ...product, quantity }]
        },
    },
})