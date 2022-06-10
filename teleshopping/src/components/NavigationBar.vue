<template>
  <div class="navigation-bar">
    <img class="navigation-bar__logo"
    src="../assets/logo.png"
    alt="Logo">
    <ul class="navigation-bar__list">
      <li class="navigation-bar__list-item"
        v-for="section in sections"
        :key="section.title">
        <a 
          class="navigation-bar__list-link" 
          :href="section.path">
          {{section.title}}
        </a>
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
      {title: "Cocina", path: "/"},
      {title: "Recetas", path: "/"},
      {title: "Compra", path: "/"},
      {title: "Configuracion", path: "/"},
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
    border-bottom: 3px solid $background-light;
    box-sizing: border-box;
    padding: 5px 50px;
    background-color: $background-dark;
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;

    &__logo{
      height: 100%;
    }

    &__list{
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none;

      &-item{
        
      }

      &-link{
        margin: 0 5px;
        border-radius: 10px;
        padding: 10px 15px;
        text-decoration: none;
        text-transform: uppercase;
        color: $white;
        transition: 100ms;
        &:hover{
          background-color: $primary;
        }
      }
    }

    &__contact{
      display: flex;
      align-items: center;
      color: $white;
    }

  }
</style>
