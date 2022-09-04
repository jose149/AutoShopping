<template>
  <div class="section">
    <nav class="categories-navbar">
      <button v-for="category in recipesCategories"
      :key="category" 
      class="categories-navbar__category"
      :class="{
        selected: category === selectedCategory
      }"
      @click="selectRecipesByCategory(category)">{{category}}
      </button>
    </nav>
    <SlidingCarrousel class="recipes-carrousel">
      <ProductCard
        v-for="recipe in recipesByCategory"
        :key="recipe.id"
        :card="{title: recipe.title, image: recipe.image, features: recipe.ingredients}"
        class="recipe-card"
      />
    </SlidingCarrousel>
    <footer class="button-container">
      <button class="add-button button" @click="openAddRecipeModal()">+ Recipe</button>
    </footer>

    <ModalAddRecipe v-if="isOpenedAddRecipeModal">
    </ModalAddRecipe>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue';
import SlidingCarrousel from '@/components/utils/SlidingCarrousel.vue'
import { 
  RecipeStateKey,
} from '@/state/state';
import { Recipe, RecipeCategory } from '@/interfaces';
import ProductCard from '@/components/utils/ProductCard.vue'
import ModalAddRecipe from '@/components/utils/ModalWindow/ModalAddRecipe.vue'



export default defineComponent({
  name: 'RecipesSection',
  components: {
    SlidingCarrousel, ProductCard, ModalAddRecipe,
  },

  setup(){
    // State injections
    const {
      recipes,
      isOpenedAddRecipeModal,
      openAddRecipeModal,
    } = inject(RecipeStateKey)!

    // Carrousel navigator logic
    const recipesCategories = ref<RecipeCategory[]>(
      Object.values(RecipeCategory)
    )
    const recipesByCategory = ref<Recipe[]>(recipes.value)
    const selectedCategory = ref<RecipeCategory>(RecipeCategory.All)
    function selectRecipesByCategory(category:RecipeCategory) {
      selectedCategory.value = category;
      if (category === RecipeCategory.All){
        recipesByCategory.value = recipes.value;
        return
      }
      recipesByCategory.value = recipes.value.filter((recipe) => recipe.category === category) 
    }

    onMounted(() => {
      const categoriesHTML = document.querySelectorAll('.categories-navbar__category')
      const categoriesNumber = categoriesHTML.length
      for (let i=0; i<categoriesNumber; i++){
        (categoriesHTML[i] as HTMLElement).style.width = `calc(100%/${categoriesNumber}`
      }
    })

    return{
      recipesCategories,
      recipesByCategory,
      selectedCategory,
      selectRecipesByCategory,
      isOpenedAddRecipeModal,
      openAddRecipeModal,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  @import "@/style/Recipes/Recipes.scss";
</style>
