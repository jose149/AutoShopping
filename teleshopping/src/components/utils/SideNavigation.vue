<template>
  <div class="side-navigation closed">
    <ul class="side-navigation__content">
      <button 
        v-for="item, index in items"
        :key="index"
        class="side-navigation__item">{{item}} 
      </button>
    </ul>
    <div class="side-navigation__hide-container">
      <button class="side-navigation__button"
      @click="toogleSideNavigation()">
        <img src="@/assets/icons/angle-left-solid.svg" alt="hola">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { RecipesCategories } from '@/state/recipeState';
import { defineComponent, onMounted, PropType, ref } from 'vue';



export default defineComponent({
  name: 'SideNavigation',
  props: {
    items: { type: Array as PropType<RecipesCategories> },
  }, 
  components: {
  },
  setup(){
    const isSideNavigationOpened = ref<boolean>(false)
    const sideNavigationElement = ref<Element | null>(null)
    onMounted(() => {
      sideNavigationElement.value = document.querySelector(".side-navigation")
    })

    function toogleSideNavigation(){
      if(isSideNavigationOpened.value){
        sideNavigationElement.value?.classList.remove("opened")
        sideNavigationElement.value?.classList.add("closed")
        isSideNavigationOpened.value = false;
      }else{
        sideNavigationElement.value?.classList.remove("closed")
        sideNavigationElement.value?.classList.add("opened")
        isSideNavigationOpened.value = true;
      }
      console.log(isSideNavigationOpened.value)
      return
    }
    
    return{
      toogleSideNavigation
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
    height: 100%;
    transition: width 0.25s;

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
      overflow: hidden;
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
  .opened{
    width: 20rem;
    img{
      transition: all 0.5s;
      transform: rotate(0deg);
    }
  }
  .closed{
    width: 0rem;
    img{
      transition: all 0.5s;
      transform: rotate(180deg);
    }
  }
</style>
