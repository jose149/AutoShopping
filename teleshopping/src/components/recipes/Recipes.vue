<template>
  <div class="section">
    <div class="recipes-menu">
      <ul class="recipes-menu__categories-list">
        <button v-for="category in recipesCategores"
        :key="category" 
        class="recipes-menu__category">{{category}}
        </button>
      </ul>
    </div>
    <HorizontalCarrousel
        class="horizontal-carrousel"
        :cards="cards"
      >
        <PresentationCard
          v-for="card in cards"
          :key="card.id"
          :card="card"
          class="presentation-card"
        />
    </HorizontalCarrousel>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue';
import HorizontalCarrousel from '@/components/utils/HorizontalCarrousel.vue'
import { 
  RecipeStateKey,
  WindowsStateKey
} from '@/state/state';
import { PresentCard } from '@/interfaces';
import PresentationCard from '@/components/utils/PresentationCard.vue'


export default defineComponent({
  name: 'RecipesSection',
  components: {
    HorizontalCarrousel, PresentationCard,
  },
  setup(){
    const {
      recipes,
      recipesCategores,
    } = inject(RecipeStateKey)!

    const{
      isRecipeDetailsPanelOpened
    } = inject(WindowsStateKey)!

    const cards = computed<PresentCard[]>(() => {
      return recipes.value.map((recipe) => {
        return{
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          features: recipe.ingredients
        }
      })
    })

    return{
      recipes,
      recipesCategores,
      cards,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .section{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .recipes-menu{
    width: 100%;
    height: 30%;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &__categories-list{
      width: 100%;
      display: flex;
      align-items: flex-end;
      list-style: none;
    }

    &__category{
      width: calc(100%/8);
      height: 10rem;
      color: black;
      font-size: 2rem;
      font-family: $font-primary;
      font-weight: 600;
      background-color: grey;
      border: none;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: 4px -3px 10px black;
      cursor: pointer;

      &:first-child{
        background-color: $color-background-light;
      }
    }
  }  
  .horizontal-carrousel{
    height: 70%;
    width: 100%;
    background-color: $color-background-light;
  }
  .presentation-card{
    margin-right: 2rem;
  }

</style>
