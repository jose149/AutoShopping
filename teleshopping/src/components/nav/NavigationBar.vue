<template>
  <div class="navigation-bar">
    <img class="navigation-bar__logo"
    src="../../assets/logo.png"
    alt="Logo">
    <ul class="navigation-bar__list">
      <li class="navigation-bar__list-item"
        v-for="section in sections"
        :key="section.title">
        <router-link class="navigation-bar__list-link" :to="section.path">
          {{section.title}}          
        </router-link>
      </li>
    </ul>
    <div class="navigation-bar__contact">CONTACT</div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NavigationBar',
  setup(){
    const sections = ref([
      {title: "Storage", path: "/storage"},
      {title: "Recipes", path: "/recipes"},
      {title: "Shop", path: "/shop"},
    ])
    return{
      sections

    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/Global.scss";
  .navigation-bar{
    border-bottom: 3px solid rgba($color-background-light,0.1);
    box-sizing: border-box;
    padding: 5px 50px;
    background-color: $color-background-dark;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__logo{
      height: 100%;
    }

    &__list{
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none;

      &-link{
        margin: 0 1rem;
        border-radius: $border-radius-title;
        padding: 10px 15px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.6rem;
        color: $color-white;
        transition: 100ms;
        &:hover,
        &:active{
          background-color: $color-primary;
        }
      }
    }

    &__contact{
      display: flex;
      align-items: center;
      color: $color-white;
    }
  }
  .active{
    background-color: $color-primary;
  }
</style>
