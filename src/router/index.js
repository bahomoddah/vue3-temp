import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Products from "../views/Products.vue";
import ProductView from "../views/ProductView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetails from "../views/ProductDetails.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    meta: { requiresAuth: false },
    children: [
      { path: "/dashboard", name: "Dashboard", component: Dashboard },
      { path: "/product", name: "Products", component: Products },
      { path: "/product/create", name: "ProductCreate", component: ProductView },
      { path: "/product/:id", name: "ProductView", component: ProductView },
    ],
  },
  {
    path: "/view/product/:slug",
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
