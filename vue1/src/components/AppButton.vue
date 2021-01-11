<template>
  <button
    @click="() => $emit('click')"
    class="button"
    :disabled="disabled"
    :class="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    disabled: Boolean,
    type: {
      type: String,
      validator(value) {
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss">
.button {
  padding: 4px 10px;
  display: inline-flex;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid white;
  cursor: pointer;
  color: black;
  transition-property: border-color, background-color, transform, filter;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  will-change: transform;
  background-color: $P200;
  &:disabled {
    background-color: $N200;
    color: $N600;
    border-color: $N100;
  }
  &.success {
    background-color: $G200;
  }
  &.danger {
    background-color: $R200;
  }
  &.warning {
    background-color: $Y200;
  }
  &:active {
    filter: brightness(1.1);
    transform: scale(0.95);
  }
}
</style>