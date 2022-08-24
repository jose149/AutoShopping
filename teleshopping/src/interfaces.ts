export enum recipeCategory {
  StartersAndApetizers = "Starters and appetizers", 
  Salads = "Salads",
  VegetablesAndLegums= "Vegetables and legumes",
  CreamAndSoaps = "Creams and soaps",
  RiceAndPasta = "Rice and pasta",
  FishAndSeafood = "Fish and seafood",
  Meats = "Meats",
  Desserts = "Desserts"
}

export interface Recipe {
  id: number,
  title: string,
  image: Image,
  ingredients: string[],
  category: recipeCategory
}

export interface ProductCardInterface {
  title: string,
  image: Image,
  features: string[]
}

export interface Image {
  src: string,
  alt: string
}

export interface Ingredient {
  id: string,
  name: string,
  amount: IngredientAmount
}

export interface IngredientAmount {
  value: number,
  unit: UnitEnumerator
}

export enum UnitEnumerator {
  weight = 'gr',
  volume = 'ml'
}

export interface queryParams{
  recipeId: string,
}