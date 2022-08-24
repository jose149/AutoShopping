<template>
  <div class="section">
    <nav class="categories-navbar">
      <ul class="categories-navbar__list">
        <button v-for="category in recipesCategories"
        :key="category" 
        class="categories-navbar__category">{{category}}
        </button>
      </ul>
    </nav>
    <SlidingCarrousel
        class="recipes-carrousel"
        :cards="cards"
      >
        <ProductCard
          v-for="card in cards"
          :key="card"
          :card="card"
          class="recipe-card"
        />
    </SlidingCarrousel>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue';
import SlidingCarrousel from '@/components/utils/SlidingCarrousel.vue'
import { 
  RecipeStateKey,
  WindowsStateKey
} from '@/state/state';
import { ProductCardInterface, recipeCategory } from '@/interfaces';
import ProductCard from '@/components/utils/ProductCard.vue'
import { propsToAttrMap } from '@vue/shared';

export default defineComponent({
  name: 'RecipesSection',
  components: {
    SlidingCarrousel, ProductCard,
  },
  setup(){
    const {
      recipes,
      recipesCategores,
    } = inject(RecipeStateKey)!

    const recipesCategories = recipes.value.map((recipe) => recipe.category)
    

    const cards = computed<ProductCardInterface[]>(() => {
      return recipes.value.map((recipe) => {
        return{
          title: recipe.title,
          image: recipe.image,
          features: recipe.ingredients
        }
      })
    })

    onMounted(() => {
      const categoriesHTML = document.querySelectorAll('.categories-navbar__category')
      const categoriesNumber = categoriesHTML.length
      for (let category in categoriesHTML){
        (categoriesHTML[category] as HTMLElement).style.width = `calc(100%/${categoriesNumber}`
      }
    })

    return{
      recipes,
      recipesCategores,
      recipesCategories,
      cards,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .section{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: antiquewhite;
  }


  .categories-navbar{
    width: 100%;
    background-color: antiquewhite;

    &__list{
      width: 100%;
      list-style: none;
      display: flex;      
    }

    &__category{
      width: calc(100%/9);
      border: none;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom: 10px solid $color-primary;
      box-sizing: border-box;
      height: 10rem;
      color: black;
      font-size: 2rem;
      font-family: $font-primary;
      font-weight: 600;
      background-color: $color-background-light;
      box-shadow: 0px -2px 2px rgba(black, 0.5);
      cursor: pointer;

      &:hover{
        background-color: darkgrey;
      }

      &:first-child{
        background-color: $color-primary;
      }
    }
  } 

  .recipes-carrousel{
    height: 70%;
    width: 100%;
    box-shadow: 0 15px 15px rgba(black,0.2);
    background-color: $color-background-light;
  }

  .recipe-card{
    margin-right: 2rem;
  }
</style>
