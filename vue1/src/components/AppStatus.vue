<template>
  <span class="status" :class="{ _success: success }">{{ status }}</span>
</template>

<script>
export default {
  name: "AppStatus",
  props: {
    success: Boolean,
  },
  computed: {
    status() {
      return this?.success ? "Success" : "Todo";
    },
  },
};
</script>
<style lang="scss">
.status {
  display: inline-flex;
  border-radius: 6px;
  padding: 2px 6px;
  width: 60px;
  justify-content: center;
  font-size: 12px;
  background-color: $Y100;
  color: black;
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  margin-right: 12px;
  &._success {
    background-color: $G100;
  }
}
</style>