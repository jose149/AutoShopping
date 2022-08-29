<template>
  <div class="card">
    <div class="card__picture" >
      <h3 class="card__heading">{{card?.title}}</h3>
    </div>
    <ul class="card__features">
      <li
        v-for="feature in card?.features"
        :key="feature"
        class="card__feature"
      >
      {{feature}}
      </li>
    </ul>
    <div class="card__cta">
      <button class="card__button">View Details</button>
    </div>
    
  </div>
</template>

<script lang="ts">
import { ProductCardInterface } from '@/interfaces';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProductCard',
  props: {
    card: { type: Object as PropType<ProductCardInterface> },
  }, 
  components: {
  },
  setup(props){
    return{
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .card{
    height: 100%;
    aspect-ratio: 1 / 1.33;
    color: black;       
    border-radius: 3px;
    box-shadow: 0 0px 2rem rgba(0, 0, 0, 0.3);
    transition: all .2s;
    -webkit-transition: all .2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: $color-background-light;

    &:hover{
      transform: scale(1.1);
      transform-origin: center;
      box-shadow: 2px 2px 10px rgba(0,0,0,.5);
    }

    &__picture{
      position: relative;
      height: 40%;
      width: 100%;
      background-size: cover;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
      background-color: cadetblue;
    }
    &__heading{
      position: absolute;
      bottom: 28%;
      right: 5%;
      font-size: $font-size-h3;
      border-radius: $border-radius-h3;
      text-transform: uppercase;
      color: white;
      text-align: center;
      padding: $padding-h3;
      background-color: $color-background-dark;
      // background-image: linear-gradient(to right bottom, $color-primary, $color-primary-2);
    }
    &__features{
      height: 40%;
      width: 100%;
      padding: 2rem;
      box-sizing: border-box;
      list-style: none;
      overflow: hidden;
    }
    &__feature{
      width: 50%;
      font-size: $font-size-h3;
      padding: 5px 0;
      padding-left: 15%;
      display: inline-flex;
      justify-content: start;
    }
    &__cta{
      height: 20%;
    }
    &__button{
      box-sizing: border-box;
      border: none;
      border-radius: $border-radius-button;
      padding: $padding-button;
      text-transform: uppercase;
      word-spacing: .5rem;
      cursor: pointer;
      transition: all .2s;
      -webkit-transition: all .2s;
      background-color: $color-primary;
      color: $color-white;
      font-size: $font-size-button;
      font-weight: $font-weight-button;
      text-shadow: 0px 0px 5px rgba(0,0,0,.4);
      box-shadow: 2px 2px 5px rgba(0,0,0,.5);
      &:hover{
        filter: brightness(1.1);
        transform: translateY(-2px);
        box-shadow: 2px 2px 10px rgba(0,0,0,.5);
      }  
      &:active{
        transform: translateY(0px);
        box-shadow: 1px 1px 5px rgba(0,0,0,.5);
      } 
    }
  }
  
</style>
