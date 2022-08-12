<template>
  
</template>

<script lang="ts">
import { Recipe } from '@/interfaces';
import { RecipeStateKey } from '@/state/state';
import { defineComponent, inject, PropType } from 'vue';

export default defineComponent({
  name: 'RecipeBox',
  props: {
    recipe: { type: Object as PropType<Recipe> },
  },
  emits:[
    "recipe-selected"
  ],
  setup(props){
    const {
      selectedRecipe,
      getRecipeById
    } = inject(RecipeStateKey)!

    function selectRecipe(recipeId:string){
      selectedRecipe.value = getRecipeById(recipeId)
    }

    return{
      selectRecipe
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .recipe-box{
    position: relative;
    height: 300px;
    width: 200px;
    color: black;       
    border-radius: 3px;
    box-shadow: 0 0px 2rem rgba(0, 0, 0, 0.3);
    transition: all 1s ease;
    overflow: hidden;
    background-color: transparent;
    &__picture{
      height: 40%;
      width: 100%;
      background-size: cover;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
      background-image: linear-gradient(to right bottom, $color-black, $color-background-dark);
    }
    &__heading{
      position: absolute;
      top: 18%;
      font-size: 1rem;
      right: 5%;
      text-transform: uppercase;
      color: white;
      text-align: center;
      padding: 1rem 1.5rem;
      background-image: linear-gradient(to right bottom, $color-primary, $color-primary-2);
    }
    &__button{
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, 0);

    }
  }
  
</style>
