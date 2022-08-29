<template>
  <NavigationBar class="navigation-bar"/>
  <router-view class="content"></router-view>
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
    height: 10vh;
  }
  .content{
    height: 90vh;
    width: 100%;
  }
  
</style>
