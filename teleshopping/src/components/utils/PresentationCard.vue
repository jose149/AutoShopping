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
    <button class="card__button">View Details</button>
  </div>
</template>

<script lang="ts">
import { PresentCard } from '@/interfaces';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PresentationCard',
  props: {
    card: { type: Object as PropType<PresentCard> },
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
    height: 35rem;
    width: 25rem;
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
    background-color: transparent;

    &:hover{
      transform: scale(1.1);
      transform-origin: center;
      filter: brightness(1.1);
      box-shadow: 2px 2px 10px rgba(0,0,0,.5);
    }

    &__picture{
      position: relative;
      height: 40%;
      width: 100%;
      background-size: cover;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
      background-image: linear-gradient(to right bottom, $color-black, $color-background-dark);
    }
    &__heading{
      position: absolute;
      bottom: 28%;
      font-size: 1.6rem;
      right: 5%;
      text-transform: uppercase;
      color: white;
      text-align: center;
      padding: 1rem 1.5rem;
      background-image: linear-gradient(to right bottom, $color-primary, $color-primary-2);
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
      font-size: 1.6rem;
      padding: 5px 0;
      padding-left: 15%;
      display: inline-flex;
      justify-content: start;
    }
    &__button{
      box-sizing: border-box;
      height: 15%;
      margin-bottom: 5%;
      border: none;
      border-radius: 10rem;
      padding: 1rem 3rem;
      text-transform: uppercase;
      word-spacing: .5rem;
      cursor: pointer;
      display: inline-block;
      transition: all .2s;
      -webkit-transition: all .2s;
      background-color: $color-primary;
      color: $color-white;
      font-size: 1.6rem;
      font-weight: 700;
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
