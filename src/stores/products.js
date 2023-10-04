import { defineStore } from 'pinia';
import shop from '@/api/shop.js';

export const useStoreProducts = defineStore('products', {
    state: () => ({
        productss: [],
    }),
    actions: {
        getProducts() {
            shop.getProducts((products) => (this.productss = products));
        },
    },
});