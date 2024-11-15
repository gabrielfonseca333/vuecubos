import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CuboDetalleComponent from './components/CuboDetalleComponent.vue';
import CubosMarcasComponent from './components/CubosMarcasComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import PerfilComponent from './components/PerfilComponent.vue';
import ComprarCubo from './components/ComprarCubo.vue';
import RegisterComponent from './components/RegisterComponent.vue';

const myRoutes = [
    {path:"/", component: HomeComponent},
    {path:"/detalle/:id", component: CuboDetalleComponent},
    {path:"/marca/:nombre", component: CubosMarcasComponent},
    {path:"/login", component: LoginComponent},
    {path:"/perfil", component: PerfilComponent},
    {path:"/comprarcubo", component: ComprarCubo},
    {path: "/register", component: RegisterComponent}
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;