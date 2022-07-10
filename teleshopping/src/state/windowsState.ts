import { ref} from "vue";
import { RecipeState } from "./recipeState";

export function setUpWindowsState(
  recipeState: RecipeState
){
  const isRecipeDetailsPanelOpened = ref<boolean>(false);
  const result = {
    isRecipeDetailsPanelOpened
  }
  return result
}
export type WindowsState = ReturnType<typeof setUpWindowsState>;