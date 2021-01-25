<template>
  <div class="app" id="app">
    <Header/>
    <my-component/>
  </div>
</template>

<script>
import Header from './components/Header';
import MyComponent from './components/MyComponent.vue';
export default {
components: {
  Header,
MyComponent,
}
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
