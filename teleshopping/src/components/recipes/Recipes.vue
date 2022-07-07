<template>
  <div class="section">
    <h2>Recipes</h2>
    <div class="recipes-wrapper">
      <RecipeBox
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
        @recipe-selected="openRecipePanel(recipe!.id)"
      />
    </div>
    <RecipePanel
      v-if="isRecipePanelOpen"
     :recipe="recipeSelected"
     @close-recipe-panel="closeRecipePanel"
    />
  </div>
</template>

<script lang="ts">
import { fakeRecipes } from '@/tests/FakeData';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import RecipeBox from './RecipeBox.vue';
import RecipePanel from './RecipePanel.vue';

export default defineComponent({
  name: 'RecipesSection',
  components: {
    RecipeBox,
    RecipePanel
  },
  setup(){
    const recipes = fakeRecipes;

    const isRecipePanelOpen = ref(false)
    const recipeSelected = ref()
    function openRecipePanel(recipeId:string){
      recipeSelected.value = recipes.find((recipe) => 
        recipe.id === recipeId
      )
      isRecipePanelOpen.value = true;
    }
    function closeRecipePanel(){
      isRecipePanelOpen.value = false;
    }

    const route = useRoute();
    const recipeId = route.params.recipeId;
    

    return{
      recipes,
      recipeSelected,
      isRecipePanelOpen,
      openRecipePanel,
      closeRecipePanel
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .section{
    height: 100%;
    width: 100%;
  }
  
</style>
