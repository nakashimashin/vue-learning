import { defineStore } from 'pinia';

export const useStoreHeader = defineStore('option', {
    state: () => ({
        isOpenAbout: false,
    }),
})