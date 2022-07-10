<template>
  <div class="recipe-box">
    <div class="recipe-box__picture" ></div>
    <h3 class="recipe-box__heading">{{recipe!.title}}</h3>
    <router-link :to="'/recipes/' + recipeId ">View Details</router-link>
  </div>
</template>

<script lang="ts">
import { Recipe } from '@/interfaces';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'RecipeBox',
  props: {
    recipe: { type: Object as PropType<Recipe> },
  },
  emits:[
    "recipe-selected"
  ],
  setup(props){
    const recipeId = ref<string>(props.recipe!.id)
    return{
      recipeId
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .recipe-box{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__picture{
      width: 100%;
      height: 100%;
    }
    &__heading{
      font-size: 30px;
    }
  }
  
</style>
