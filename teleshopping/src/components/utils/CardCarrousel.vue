<template>
  <div class="card-carrousel">
    <button 
      class="card-carrousel__nav left"
      @click="moveCarrouselToLeft()"
    >
      <img class="card-carrousel__side-icon" src="@/assets/icons/angle-left-solid.svg" alt="hola"/>
    </button>
    <div class="card-carrousel__container">
      <div class="card-carrousel__wrapper">
        <PresentationCard
        v-for="card in cards"
        :key="card.id"
        :card="card"
        class="card-carrousel__card"
      />
      </div>
    </div>
    <button 
      class="card-carrousel__nav right"
      @click="moveCarrouselToRight()"
    >
      <img class="card-carrousel__side-icon" src="@/assets/icons/angle-right-solid.svg" alt="hola"/>
    </button>
  </div>
</template>

<script lang="ts">
import { Recipe } from '@/interfaces';
import { defineComponent, PropType } from 'vue';
import PresentationCard from '@/components/utils/PresentationCard.vue'

export default defineComponent({
  name: 'CardCarrousel',
  props: {
    cards: { type: Array as PropType<Recipe[]> },
  }, 
  components: {
    PresentationCard,
  },
  setup(){

    // TODO implement those functions as scroll
    var scroller = document.getElementsByClassName("card-carrousel__container")
    function moveCarrouselToLeft(){
      console.log(scroller[0].scrollLeft = scroller[0].scrollLeft - 800)
    }
    function moveCarrouselToRight(){
      console.log(scroller[0].scrollLeft = scroller[0].scrollLeft + 800)
    }

    return{
      moveCarrouselToLeft,
      moveCarrouselToRight,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .card-carrousel{
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 0px 2rem rgba(0, 0, 0, 0.3);

    &__nav{
      position: absolute;
      top: 0%;
      height: 100%;
      width: 7rem;
      background-color: rgba($color-background-dark, 0.1);
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      cursor: pointer;
      transition: all .25s;
      &:hover{
        background-color: rgba($color-background-dark, 0.3);
      }
      &:active{
        background-color: rgba($color-background-dark, 0.2);
      }
      &.left{
        left: 0%;
      }
      &.right{
        right: 0%;
      }
    }
    &__side-icon{
      height: 3rem;
      width: 3rem;
    }
    &__container{
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 0;
      display: block;
      overflow: hidden;
      scroll-behavior: smooth;
      
    }
    &__wrapper{
      position: absolute;
      padding: 0 5rem;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    &__card{
      margin: 0 2rem;
      display: inline-flex;
    }
  }
  
</style>
