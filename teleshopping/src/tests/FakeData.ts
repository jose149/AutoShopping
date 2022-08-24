import { Ingredient, Recipe, recipeCategory, UnitEnumerator } from "@/interfaces";

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
      category: recipeCategory.RiceAndPasta
    },
    {
      id: 2,
      title: "Pizza",
      image: {
        src: "pizza.jpg",
        alt: "pizza"
      },
      ingredients: ['Tomatoes', 'Water', 'Flour', 'Cheese', 'Jam'],
      category: recipeCategory.RiceAndPasta
    },
    {
      id: 3,
      title: "Piña",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: recipeCategory.Desserts
    },
    {
      id: 4,
      title: "Arroz",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: recipeCategory.RiceAndPasta
    },
    {
      id: 5,
      title: "Rabiolis",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: recipeCategory.RiceAndPasta
    },
    {
      id: 6,
      title: "Pizza Parmessana",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: recipeCategory.RiceAndPasta
    },
    {
      id: 7,
      title: "Burguer CBO",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: recipeCategory.Meats
    },
    {
      id: 8,
      title: "Rodaballo",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water'],
      category: recipeCategory.FishAndSeafood
    },
  ]
 