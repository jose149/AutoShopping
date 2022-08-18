<template>
  <div class="section">
    <div class="recipes-menu">
      <ul class="recipes-menu__categories-list">
        <li v-for="category in recipesCategores"
        :key="category" 
        class="recipes-menu__category">{{category}}</li>
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
    align-items: center;
    &__categories-list{
      height: 80%;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }
    &__category{
      color: black;
      font-size: 2rem;
      font-family: $font-primary;
      margin-right: 2rem;
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
