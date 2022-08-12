<template>
  <NavigationBar class="navigation-bar"/>
  <main class="content">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
// import { useRoute } from 'vue-router';
import NavigationBar from './components/nav/NavigationBar.vue'
import { setUpRecipeState } from './state/recipeState'
import { setUpWindowsState } from './state/windowsState'
import { RecipeStateKey, WindowsStateKey } from './state/state'
// import { TeleShoppingRouter } from './router/TeleShoppingRouter';
import { createTeleShoppingVm } from './TeleShoppingViewModel'

export default defineComponent({
  name: 'TeleShopping',
  components: {
    NavigationBar,
  },
  setup(){
    // const route = useRoute()
    // const teleShoppingRouter = new TeleShoppingRouter()
    // const URLParams = teleShoppingRouter.getQuery(route)
    // const recipeState = setUpRecipeState(
    //   {
    //     recipeId: URLParams.recipeId
    //   }
    // )
    const recipeState = setUpRecipeState()
    const windowsState = setUpWindowsState(recipeState)
    provide(RecipeStateKey, recipeState)
    provide(WindowsStateKey, windowsState)

    
    const teleShopping = createTeleShoppingVm(
      recipeState,
      windowsState
    )

    return{
      teleShopping,
      ...recipeState,
      windowsState
    }
  }
});
</script>

<style scoped lang="scss">
  @import "@/style/Global.scss";
  .navigation-bar{
    position: absolute;
    top: 0;
    left: 0;
    height: 10rem;
    z-index: 1;
  }
  .content{
    position: absolute;
    padding-top: 10rem;
    box-sizing: border-box;
    top: 0rem;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  
</style>
