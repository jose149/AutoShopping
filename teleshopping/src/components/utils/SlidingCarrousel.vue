<template>
  <div class="horizontal-carrousel">
    <button 
      class="horizontal-carrousel__nav-button left"
      @click="slideCarrouselByDirection(horizontalDirection.left)"
    >
      <svg 
        class="horizontal-carrousel__side-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 256 512"
      >
        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
      </svg>
    </button>
    <div class="horizontal-carrousel__container">
      <div class="horizontal-carrousel__wrapper">
        <slot></slot>
      </div>
    </div>
    <button 
      class="horizontal-carrousel__nav-button right"
      @click="slideCarrouselByDirection(horizontalDirection.right)"
    >
      <svg 
        class="horizontal-carrousel__side-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 256 512"
      >
        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export enum horizontalDirection{
  right = "right",
  left = "left"
}




export default defineComponent({
  name: 'SlidingCarrousel',
  props: {
    scrollUnit: { type: Number },
  },

  setup(props){
    const defaultScrollUnit = 800;
    const scroller = document.getElementsByClassName("horizontal-carrousel__container");

    function slideCarrouselByDirection(horizontaldirection:horizontalDirection){
      const scrollUnit = props.scrollUnit ?? defaultScrollUnit;
      if(horizontaldirection === horizontalDirection.left){
        return scroller[0].scrollLeft = scroller[0]?.scrollLeft - scrollUnit!
      }
      scroller[0].scrollLeft = scroller[0].scrollLeft + scrollUnit!
    }

    return{
      slideCarrouselByDirection,
      horizontalDirection
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  @import "@/style/Utils/SlidingCarrousel.scss"
  
</style>
