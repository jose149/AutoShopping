import { Ingredient, Recipe } from "@/interfaces";
import { fakeIngredients, fakeRecipes } from "@/tests/FakeData";
import { ref } from "vue";

// const recipes = fakeRecipes;
// const ingredients = fakeIngredients

export interface RecipeStateProps{
  recipeId: string,
}

export function setUpRecipeState(props: RecipeStateProps){
  const recipeId = ref<string|null>(props.recipeId ?? null)

  const recipes = ref<Recipe[]>();
  const ingredients = ref<Ingredient[]>()

  const result = {
    recipeId,
    recipes,
    ingredients
  }
  return result
}

export type RecipeState = ReturnType<typeof setUpRecipeState>;