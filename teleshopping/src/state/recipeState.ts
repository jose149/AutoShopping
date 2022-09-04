import { Recipe } from "@/interfaces";
import { ref } from "vue";

export interface RecipeStateProps{
  recipeId: string,
}

export function setUpRecipeState(){
  const recipes = ref<Recipe[]>([]);
  const recipeDetails = ref();
  const selectedRecipe = ref<Recipe>()
  

  function getRecipeById(recipeId:string){
    if (!recipes.value){
      return
    }
    // return recipes.value.find((recipe) => recipe.id === recipeId)
  }

  const isOpenedAddRecipeModal = ref<boolean>(false)
  function openAddRecipeModal(){
    isOpenedAddRecipeModal.value = true;
  }
  function closeAddRecipeModal(){
    isOpenedAddRecipeModal.value = false;
  }

  const result = {
    recipes,
    selectedRecipe,
    recipeDetails,
    getRecipeById,
    isOpenedAddRecipeModal,
    openAddRecipeModal,
    closeAddRecipeModal,
  }
  return result
}

export type RecipeState = ReturnType<typeof setUpRecipeState>;