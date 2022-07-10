import {createRouter, createWebHistory, RouteLocationNormalizedLoaded, Router} from 'vue-router'
import RecipesSection from './components/recipes/Recipes.vue'
import ShopSection from './components/shop/Shop.vue'
import StorageSection from './components/storage/Storage.vue'
import RecipeDetails from './components/recipes/RecipeDetails.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    // redirect does the same as Alias without changing the URL name
    // { path: '/storage', component: StorageSection, alias: '/' },
    { path: '/', redirect: '/storage'},
    { path: '/storage', component: StorageSection },
    { path: '/recipes', component: RecipesSection},
    { path: '/recipes/:recipeId', component: RecipeDetails},
    { path: '/shop', component: ShopSection },
    { path: '/:notFound(.*)', redirect: '/'}
    
  ],
  linkActiveClass: 'active'
})

export class TeleShoppingRouter {
  // public setQuery(AppParams){}
  public getQuery(route:RouteLocationNormalizedLoaded){
    return{
      recipeId: route.params.recipeId as string
    }     
  }
}