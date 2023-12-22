import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import PlaystationView from "@/views/PlaystationView.vue";
import LoginView from "@/views/LoginView.vue";
import WinkelkarView from "@/views/WinkelkarView.vue";
import ItemView from "@/views/ItemView.vue";
import CheckoutView from "@/views/checkoutView.vue";
import ConfirmView from "@/views/confirmView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeView},
        {path: '/products', component: ProductsView},
        {name: 'product-detail', path: '/products/:id', component: ItemView},
        {path: '/playstation', component: PlaystationView},
        {path: '/login', component: LoginView},
        {path: '/winkelmand', component: WinkelkarView},
        {path: '/checkout', component: CheckoutView},
        {path: '/confirm', component: ConfirmView},
    ]
});

export default router;
