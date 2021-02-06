<template>
  <span
    class="color"
    :style="{ backgroundColor: color, width: `${size}px`, height: `${size}px` }"
  />
</template>

<script>
export default {
  name: "AppColor",
  props: {
    color: String,
    size: {
      type: Number,
      default: 12,
    },
  },
};
</script>

<style lang="scss">
.color {
  display: inline-block;
  border-radius: 50%;
}
</style>
