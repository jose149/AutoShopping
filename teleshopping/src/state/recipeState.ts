import { Ingredient, Recipe } from "@/interfaces";
import { ref } from "vue";

export interface RecipeStateProps{
  recipeId: string,
}

export function setUpRecipeState(){
  const recipes = ref<Recipe[]>();
  const ingredients = ref<Ingredient[]>()

  const result = {
    recipes,
    ingredients
  }
  return result
}

export type RecipeState = ReturnType<typeof setUpRecipeState>;