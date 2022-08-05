import {createRouter, createWebHistory, RouteLocationNormalizedLoaded} from 'vue-router'
import RecipesSection from '../components/recipes/Recipes.vue'
import ShopSection from '../components/shop/Shop.vue'
import StorageSection from '../components/storage/Storage.vue'

export const teleShoppingRouter =
  createRouter({
    history: createWebHistory(),
    routes: [
      // redirect does the same as Alias without changing the URL name
      // { path: '/storage', component: StorageSection, alias: '/' },
      { path: '/', redirect: '/storage'},
      { path: '/storage', component: StorageSection },
      { path: '/recipes', component: RecipesSection},
      { path: '/recipes/:recipeId', component: RecipesSection, props: true},
      { path: '/shop', component: ShopSection },
      // { path: '/:notFound(.*)', redirect: '/'}
      
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