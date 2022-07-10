<template>
  <div class="recipe-panel">
    <h3 class="recipe-panel__header">{{recipe?.title}}</h3>
    <button class="btn recipe-panel__close"
      @click="closeRecipePanel()"
    >X</button>
    <h4>Ingredients</h4>
  </div>
</template>

<script lang="ts">
import { Ingredient, Recipe } from '@/interfaces';
import { defineComponent, PropType } from 'vue';
import { useRoute, useRouter } from 'vue-router';
//  import { createComponent, reactive, PropType} from '@vue/composition-api'

export default defineComponent({
  name: 'RecipeDetails',
  props: {
    recipe: { type: Object as PropType<Recipe> },
    ingredients: { type: Array as PropType<Ingredient[]> },
    // recipeId: {type: String as PropType<string>}
  },
  setup(){
    const route = useRoute();
    const router = useRouter();
    console.log(route.params.recipeId);
    function closeRecipePanel(){
      // selectedRecipe.value = undefined
      // selectedIngredients.value = []
      // isRecipePanelOpen.value = false;
      router.push('/recipes')
    }
    return{
      closeRecipePanel,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .recipe-panel{
    border: 3px solid black;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: grey;
    height: 95%;
    width: 95%;
    z-index: 1;
  }
  
</style>
