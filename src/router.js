import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import Error from '@/pages/Error.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/:catchAll(.*)', name: 'Error', component: Error},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router