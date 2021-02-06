<template>
  <div id="app" class="app">
    <div id="nav" class="app__nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  background-color: rgb(22, 22, 41);
}
body {
  color: white;
}
.app {
  padding: 24px 32px;
  &__nav {
    margin-bottom: 24px;
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  color: rgb(220, 220, 0);
}
</style>
