<template>
  <NavigationBar/>
  <main class="content">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import { useRoute } from 'vue-router';
import NavigationBar from './components/nav/NavigationBar.vue'
import { setUpRecipeState } from './state/recipeState'
import { setUpWindowsState } from './state/windowsState'
import { RecipeStateKey, WindowsStateKey } from './state/state'
import { TeleShoppingRouter } from './TeleShoppingRouter';
import { createTeleShoppingVm } from './TeleShoppingViewModel'

export default defineComponent({
  name: 'TeleShopping',
  components: {
    NavigationBar,
  },
  setup(props){
    const route = useRoute()
    const teleShoppingRouter = new TeleShoppingRouter()
    const URLParams = teleShoppingRouter.getQuery(route)

    const recipeState = setUpRecipeState(
      {
        recipeId: URLParams.recipeId
      }
    )
    const windowsState = setUpWindowsState(recipeState)

    provide(RecipeStateKey, recipeState)
    provide(WindowsStateKey, windowsState)

    
    const teleShopping = createTeleShoppingVm(
      recipeState,
      windowsState
    )
    
    // watch([recipeState.recipeId],
    // () => teleShoppingRouter.setQuery(
    //   {
    //     recipe: recipeState.recipes,
    //   }
    // ))
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
  .content{
    padding: 0 5%;
    padding-bottom: 5%;
    height: 85vh;
    width: 100%;
    box-sizing: border-box;
  }
  
</style>
