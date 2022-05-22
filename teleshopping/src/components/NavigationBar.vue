<template>
  <div class="navigation-bar">
    <img class="navigationbar__logo"
    src="../assets/logo.png"
    alt="Logo">
    <ul class="navigationbar__links">
      <li></li>
    </ul>
    <div class="navigationbar__contact">CONTACT</div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationBar'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navigation-bar{
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &__logo{
      height: 100%;
    }

  }
</style>
