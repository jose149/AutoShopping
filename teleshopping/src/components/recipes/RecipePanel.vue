<template>
  <div class="recipe-panel">
    <h3 class="recipe-panel__header">{{recipe?.title}}</h3>
    <button class="btn recipe-panel__close"
      @click="$emit('close-recipe-panel')"
    >X</button>
    <img 
      :src="'../../../../images/' + recipe!.image.src" 
      :alt="recipe!.image.alt"/>
    <h4>Ingredients</h4>
    <ul>
      <li
      v-for="ingredient in recipe!.ingredients"
      :key="ingredient.id"
      >
      {{ingredient.name}} {{ingredient.amount.value}}{{ingredient.amount.unit}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Recipe } from '@/interfaces';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RecipePanel',
  props: {
    recipe: { type: Object as PropType<Recipe> },
  },
  setup(props){
    console.log(props.recipe)
    return{
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
