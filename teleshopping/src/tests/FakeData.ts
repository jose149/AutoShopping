import { Ingredient, Recipe, UnitEnumerator } from "@/interfaces";

export const fakeRecipes:Recipe[] =
  [
    {
      id: "R1",
      title: "Spagetthis",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water']
    },
    {
      id: "R2",
      title: "Pizza",
      image: {
        src: "pizza.jpg",
        alt: "pizza"
      },
      ingredients: ['Tomatoes', 'Water', 'Flour', 'Cheese', 'Jam']
    },
    {
      id: "R3",
      title: "Piña",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water']
    },
    {
      id: "R4",
      title: "Arroz",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water']
    },
    {
      id: "R5",
      title: "Rabiolis",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water']
    },
    {
      id: "R6",
      title: "Parmessana",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water']
    },
    {
      id: "R7",
      title: "Cahmpu",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water']
    },
    {
      id: "R8",
      title: "Rodaballo",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: ['Tomatoes', 'Pasta', 'Water']
    },
  ]

export const fakeIngredients:Ingredient[] =
[
  {
    id: "I0",
    name: "tomatoes",
    amount: {
      value: 200,
      unit: UnitEnumerator.weight
    }
  },
  {
    id: "I1",
    name: "pasta",
    amount: {
      value: 500,
      unit: UnitEnumerator.weight
    }
  },
  {
    id: "I2",
    name: "water",
    amount: {
      value: 500,
      unit: UnitEnumerator.volume
    }
  },
  {
    id: "I3",
    name: "flour",
    amount: {
      value: 500,
      unit: UnitEnumerator.weight
    }
  },
  {
    id: "I4",
    name: "cheese",
    amount: {
      value: 200,
      unit: UnitEnumerator.weight
    }
  },
  {
    id: "I5",
    name: "jam",
    amount: {
      value: 200,
      unit: UnitEnumerator.weight
    }
  }
]
 