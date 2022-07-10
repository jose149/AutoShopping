import { RecipeState } from "./state/recipeState";
import { WindowsState } from "./state/windowsState";
import { fakeIngredients, fakeRecipes } from "./tests/FakeData";



export function createTeleShoppingVm(
  recipeState: RecipeState,
  windowsState: WindowsState
){
  const { 
    recipes,
    ingredients 
  } = recipeState

  recipes.value = fakeRecipes;
  ingredients.value = fakeIngredients;
  return {

  }
}
