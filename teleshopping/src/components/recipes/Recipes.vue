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
        :key="recipe"
        :card="recipe"
        class="recipe-card"
      />
    </SlidingCarrousel>
    <footer class="button-container">
      <button class="add-button button">+ Recipe</button>
    </footer>
    <ModalTemplate>
      <template v-slot:modal-title>
        <h3 class="modal-title">Add recipe</h3>
      </template>
      <template v-slot:modal-content>
        <div class="modal-content"></div>
      </template>
      <template v-slot:modal-footer>
        <div class="modal-footer"></div>
      </template>
    </ModalTemplate>
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
import ModalTemplate from '@/components/utils/ModalTemplate.vue'



export default defineComponent({
  name: 'RecipesSection',
  components: {
    SlidingCarrousel, ProductCard, ModalTemplate,
  },

  setup(){
    // State injections
    const {
      recipes,
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
      selectRecipesByCategory
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  @import "@/style/Recipes/Recipes.scss";
  .modal-title{
    font-size: $font-size-h3;
    font-weight: $font-weight-h3;
  }
  .modal-content{
    
  }
  .modal-footer{

  }
</style>
