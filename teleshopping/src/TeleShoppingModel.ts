import { fakeRecipes } from "./tests/FakeData";

export class TeleShoppingModel{
  // constructor(){}
  public searchRecipes = function(){
    return fakeRecipes;
  }
  public searchRecipeDetails = function(){
    return fakeRecipes;
  }
}