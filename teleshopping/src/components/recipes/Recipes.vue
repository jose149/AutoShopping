<template>
  <div class="section">
    <SideNavigation
    :items=recipesCategores
    />
    <div class="underlay">
      <CardCarrousel
        class="card-carrousel"
        :cards="cards"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue';
import SideNavigation from '@/components/utils/SideNavigation.vue'
import CardCarrousel from '@/components/utils/CardCarrousel.vue'
import { 
  RecipeStateKey,
  WindowsStateKey
} from '@/state/state';
import { PresentCard } from '@/interfaces';


export default defineComponent({
  name: 'RecipesSection',
  components: {
    SideNavigation, CardCarrousel
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
  }
  .underlay{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-background-dark;

  }  
  .card-carrousel{
    height: 70%;
    width: 100%;
    background-color: $color-background-light;
  }

</style>
