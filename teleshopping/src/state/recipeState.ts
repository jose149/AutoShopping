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

  const result = {
    recipes,
    selectedRecipe,
    recipeDetails,
    getRecipeById
  }
  return result
}

export type RecipeState = ReturnType<typeof setUpRecipeState>;