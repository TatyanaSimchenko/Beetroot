<template>
  <div class="home">
    <header class="home__header">
      <h1 class="home__title">Home</h1>
      <span v-if="loading">Loading...</span>
    </header>

    <input
      class="home__search"
      placeholder="Search..."
      v-model="search"
      type="text"
    />

    <ul class="home__list">
      <li v-for="person in getPeopleBySearch" :key="person.id">
        <router-link :to="{ name: 'Post', params: { id: person.id } }">{{
          person.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["people", "loading"]),
    ...mapGetters(["havePeople"]),
    getPeopleBySearch() {
      return this.people.filter((person) =>
        person.name.toUpperCase().includes(this.search.toUpperCase())
      );
    },
  },
  methods: {
    ...mapActions(["getPeople"]),
  },
  created() {
    if (!this.havePeople) this.getPeople();
  },
};
</script>

<style lang="scss">
.home {
  &__header {
    display: flex;
    align-items: baseline;
    margin-bottom: 24px;
  }
  &__title {
    margin-right: 24px;
  }
  &__list {
    list-style-position: inside;
  }
  &__search {
    margin-bottom: 24px;
    height: 32px;
    padding: 0 12px;
    border-radius: 4px;
  }
}
</style>
