<template>
  <div class="recipe-box">
    <h2 class="recipe-box__header">{{recipe!.title}}</h2>
    <img 
      :src="'../../../../images/' + recipe!.image.src" 
      :alt="recipe!.image.alt"/>
    <button class="recipe-box__button"
      @click="$emit('recipe-selected', recipe!.id)"> See more 
    </button>
  </div>
</template>

<script lang="ts">
import { Recipe } from '@/interfaces';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RecipeBox',
  props: {
    recipe: { type: Object as PropType<Recipe> },
  },
  emits:[
    "recipe-selected"
  ],
  setup(){
    return{
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .recipe{
    height: 100%;
    width: 100%;
  }
  
</style>
