<template>
  <div class="navigation-bar">
    <img class="navigation-bar__logo"
    src="../assets/logo.png"
    alt="Logo">
    <ul class="navigation-bar__list">
      <li class="navigation-bar__list-item"
      v-for="section in sections"
      :key="section.link">
      <a class="navigation-bar__list-link" :href="section.path">{{section.link}}</a>
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
      {link: "Section 1", path: "/"},
      {link: "Section 2", path: "/"},
      {link: "Section 3", path: "/"},
      {link: "Section 4", path: "/"}
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
    background-color: $background;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__logo{
      height: 100%;
    }

    &__list{
      display: flex;
      flex-direction: row;
      list-style: none;
    }

    &__list-item{
      padding: 15px 20px;
      
    }

    &__list-link{
      text-decoration: none;
      color: $white;
    }

    &__contact{
      color: $white;
    }

  }
</style>
