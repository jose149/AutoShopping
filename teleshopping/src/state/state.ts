import { InjectionKey } from "vue";
import { RecipeState } from './recipeState'
import { WindowsState } from "./windowsState";


export const RecipeStateKey: InjectionKey<RecipeState> = Symbol('recipe-state');
export const WindowsStateKey: InjectionKey<WindowsState> = Symbol('recipe-state');