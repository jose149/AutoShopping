import { watch } from "vue";
import { RecipeState } from "./state/recipeState";
import { WindowsState } from "./state/windowsState";
import { TeleShoppingModel } from "./TeleShoppingModel";
import { fakeRecipes } from "./tests/FakeData";



export function createTeleShoppingVm(
  recipeState: RecipeState,
  windowsState: WindowsState
){
  const { 
    recipes, 
    selectedRecipe,
    recipeDetails
  } = recipeState

  const model = new TeleShoppingModel;

  recipes.value = model.searchRecipes()
  // watch(selectedRecipe.value, () => {
  //   recipeDetails.value = model.searchRecipeDetails
  // })
  
  return {

  }
}
