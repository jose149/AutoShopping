import { Recipe, UnitEnumerator } from "@/interfaces";

export const fakeRecipes:Recipe[] =
  [
    {
      id: "R1",
      title: "Spagetthis",
      image: {
        src: "../../../../images/espaguetis.jpeg",
        alt: "espaguetis"
      },
      ingredients: [
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
        }
      ]
    },
    {
      id: "R2",
      title: "Pizza",
      image: {
        src: "pizza.jpg",
        alt: "pizza"
      },
      ingredients: [
        {
          id: "I0",
          name: "tomatoes",
          amount: {
            value: 200,
            unit: UnitEnumerator.weight
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
          id: "I2",
          name: "water",
          amount: {
            value: 500,
            unit: UnitEnumerator.volume
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
    }
  ]
