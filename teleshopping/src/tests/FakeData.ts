import { Ingredient, Recipe, RecipeCategory, UnitEnumerator } from "@/interfaces";

export const fakeRecipes:Recipe[] =
  [
    {
      id: 1,
      title: "Spagetthis",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: RecipeCategory.RiceAndPasta
    },
    {
      id: 2,
      title: "Pizza",
      image: {
        src: "pizza.jpg",
        alt: "pizza"
      },
      ingredients: ['Tomatoes', 'Water', 'Flour', 'Cheese', 'Jam'],
      category: RecipeCategory.RiceAndPasta
    },
    {
      id: 3,
      title: "Piña",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: RecipeCategory.Desserts
    },
    {
      id: 4,
      title: "Arroz",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: RecipeCategory.RiceAndPasta
    },
    {
      id: 5,
      title: "Rabiolis",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: RecipeCategory.RiceAndPasta
    },
    {
      id: 6,
      title: "Parmessana",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: RecipeCategory.RiceAndPasta
    },
    {
      id: 7,
      title: "Burguer CBO",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: RecipeCategory.Meats
    },
    {
      id: 8,
      title: "Rodaballo",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: RecipeCategory.FishAndSeafood
    },
  ]
 