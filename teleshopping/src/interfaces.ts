export interface Recipe {
  id: string,
  title: string,
  image: Image,
  ingredients: string[]
}

export interface PresentCard {
  id: string,
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