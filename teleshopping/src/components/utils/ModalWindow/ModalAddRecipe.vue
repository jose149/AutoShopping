<template>
    <ModalTemplate 
      @close="closeAddRecipeModal()"
    >
      <template v-slot:modal-title>
        <h3 class="modal-title">Add recipe</h3>
      </template>
      <template v-slot:modal-content>
        <div class="modal-content">
          <form action="" method="">
            <label for="recipeName">Title:</label><br>
            <input type="text" name="recipeName" pattern="[A-Za-z]{3}" title="Three letter name" placeholder="Joe" autofocus required><br><br>
            <label for="recipePhoto">(Optional) Photo:</label><br>
            <input type="file" name="recipePhoto" pattern="[A-Za-z]{3}" title="Three letter name"><br><br>
            <label for="recipeVideo">(Optional) Video:</label><br>
            <input type="file" name="recipeVideo" pattern="[A-Za-z]{3}" title="Three letter name"><br><br>
            <label for="recipeDescription">(Optional) Description:</label><br>
            <input type="text" name="recipeDescription" pattern="[A-Za-z]{3}" title="Three letter name" placeholder="Write description here..."><br><br>
            <button type="button">Select ingredients</button><br><br>
            <label for="recipeName">Preparation:</label><br>
            <input type="text" name="recipeName" pattern="[A-Za-z]{3}" title="Three letter name" placeholder="Step 1: " required><br><br>
            <input type="submit" value="Submit">
          </form>
        </div>
      </template>
      <template v-slot:modal-footer>
        <div class="modal-footer"></div>
      </template>
    </ModalTemplate>
    
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';
  import ModalTemplate from '@/components/utils/ModalWindow/ModalTemplate.vue'
  import { RecipeStateKey } from '@/state/state';
  
  export default defineComponent({
    name: 'ModalAddRecipe',
    components: {
      ModalTemplate,
    },
    emits: ['close'],
    setup(){
      const {
      closeAddRecipeModal,
    } = inject(RecipeStateKey)!
      return{
        closeAddRecipeModal
      }
    }
  });
</script>
<style lang="scss" scoped>
@import "@/style/Global.scss";
  .modal-title{
    font-size: $font-size-h3;
    font-weight: $font-weight-h3;
  }
  .modal-content{
    
  }
  .modal-footer{

  }
</style>
