import { createApp } from 'vue'
import App from './TeleShopping.vue'
import {createRouter, createWebHistory} from 'vue-router'
import RecipesSection from './components/recipes/Recipes.vue'
import ShopSection from './components/shop/Shop.vue'
import StorageSection from './components/storage/Storage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // redirect does the same as Alias without changing the URL name
    // { path: '/storage', component: StorageSection, alias: '/' },
    { path: '/', redirect: '/storage'},
    { path: '/storage', component: StorageSection },
    { path: '/recipes', component: RecipesSection, children: [
        // {path: :recipeId}
    ]},
    { path: '/shop', component: ShopSection },
    { path: '/:notFound(.*)', redirect: '/'}
    
  ],
  linkActiveClass: 'active'
})
const app = createApp(App)

app.use(router)

app.mount('#app')
