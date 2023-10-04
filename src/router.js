import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue';
import Home2 from '@/pages/Home2.vue';
import ProductList from '@/pages/ProductList.vue';
import Error from '@/pages/Error.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/home2', name: 'Home2', component: Home2},
    {path: '/productList', name: 'ProductList', component: ProductList},
    {path: '/:catchAll(.*)', name: 'Error', component: Error},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router