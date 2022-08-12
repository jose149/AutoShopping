<template>
  <div class="side-navigation">
    <ul class="side-navigation__content">
      <button 
        v-for="item, index in items"
        :key="index"
        class="side-navigation__item">{{item}} 
      </button>
    </ul>
    <div class="side-navigation__hide-container">
      <button class="side-navigation__button">
        <img src="@/assets/icons/angle-left-solid.svg" alt="hola">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { RecipesCategories } from '@/state/recipeState';
import { defineComponent, PropType } from 'vue';



export default defineComponent({
  name: 'SideNavigation',
  props: {
    items: { type: Array as PropType<RecipesCategories> },
  }, 
  components: {
  },
  setup(){
    return{
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .side-navigation{
    position: relative;
    overflow: visible;
    
    &__content{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      padding: 10% 5%;
      box-sizing: border-box;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: $color-primary;
      z-index: 1;
    }
    &__item{
      padding: 1.5rem 1rem;
      border-radius: 3px;
      border: none;
      color: currentColor;
      font-size: 1.5rem;
      cursor: pointer;
      align-items: center;
      background-color: $color-background-light;
    }
    &__hide-container{
      position: absolute;
      top: 0;
      left: 100%;
      height: 100%;
      width: 8rem;
      transform: translate(-50%,0);
      display: flex;
      justify-content: end;
    }
    &__button{
      padding-right: .5rem;
      height: 5rem;
      width: 10rem;
      border-radius: 15px;
      border: solid 5px $color-primary;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: $color-background-light;
      cursor: pointer;

      img{
        height: 3rem;
        width: 3rem;
      }
    }
  }  
</style>
