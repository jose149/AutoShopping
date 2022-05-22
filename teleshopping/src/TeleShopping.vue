<template>
  <NavigationBar/>
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
</style>
