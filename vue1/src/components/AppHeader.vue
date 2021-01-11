<template>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
.header {
  padding: 32px;
  background-color: $C300;
  &__title {
    color: white;
  }
}
</style>