<template>
  <div id="app">
    <ul>
      <li v-for="post in $store.state.posts" :key="post.id">
        <h2>{{ post.tatle }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
