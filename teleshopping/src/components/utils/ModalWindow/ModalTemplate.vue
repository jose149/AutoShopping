<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container" >
      <slot name="modal-header">
        <div class="modal-header">
          <slot name="modal-title">
          </slot>
          <button class="close-button" @click="$emit('close')">
            <img
              svg-inline
              src="@/assets/icons/close.svg"
            />
          </button>
        </div>
      </slot>
      <slot name="modal-content"></slot>
      <slot name="modal-footer">
        <div class="modal-footer">
          <div class="modal-close-button">
            <button @click="$emit('close')">Close</button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalTemplate',

  emits: ['close'],
});
</script>
<style lang="scss" scoped>
@import "@/style/Global.scss";
.modal-overlay{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 99;
}
.modal-container {
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border-radius: $border-radius-modal;
  padding: $padding-modal;
  height: 70vh;
  width: 70vw;
  background-color: $color-background-light;
  box-shadow: 0 0px 30px rgba(black,0.5);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-header{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20%;
}
.close-button{
  position: absolute;
  top: 5rem;
  right: 5rem;
  cursor: pointer;
}
</style>
