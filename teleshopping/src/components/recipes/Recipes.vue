<template>
  <div class="section">
    <h2 class="section__heading">Recipes</h2>
    <div class="recipes-carrousel">
      <RecipeBox
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Ingredient, Recipe } from '@/interfaces';
import { defineComponent, inject, ref } from 'vue';
import RecipeBox from './RecipeBox.vue';
import { 
  RecipeStateKey,
  WindowsStateKey
} from '@/state/state';


export default defineComponent({
  name: 'RecipesSection',
  components: {
    RecipeBox,
  },
  setup(){
    const {
      recipes,
      ingredients
    } = inject(RecipeStateKey)!

    const{
      isRecipeDetailsPanelOpened
    } = inject(WindowsStateKey)!

    const selectedRecipe = ref<Recipe>()
    const selectedIngredients = ref<Ingredient[]>([])  

    return{
      recipes,
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
    display: flex;
    flex-direction: column;
    align-items: center;
    &__heading{
      font-size: $heading-2;
    }
  }
  .recipes-carrousel{
    height: 50vh;
    width: 80%;
    display: flex;
    padding: 100px 50px;
    box-sizing: border-box;
    background-color: red;
  }
  
</style>
