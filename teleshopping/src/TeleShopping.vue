<template>
  <NavigationBar/>
  <div class="underlay"></div>
  <div class="overlay"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/NavigationBar.vue'

export default defineComponent({
  name: 'TeleShopping',
  components: {
    NavigationBar
  }
});
</script>

<style scoped lang="scss">
  @import "@/style/Global.scss";
  .underlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: url("./assets/pexels-diego-🚀-2398375.jpg");
    background-origin: center;
    background-size: 80%;
    filter: brightness(0.4);
    z-index: -1;
  }
  .overlay{
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 50vw;
    transform: translate(-50%, 0);
    height: 90vh;
    width: 90vw;
    background-color: $background-light;
    z-index: -1;
  }
  
</style>
