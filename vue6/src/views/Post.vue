<template>
  <div class="person">
    <h1 class="person__title">{{ person.name }}</h1>
    <ul class="person__list">
      <li class="person__item">
        Birth Year: <b>{{ person.birth_year }}</b>
      </li>
      <li class="person__item">
        Eye Color: <b>{{ person.eye_color }}</b>
        <app-color :color="person.eye_color" />
      </li>
      <li class="person__item">
        Gender: <b>{{ person.gender }}</b>
      </li>
      <li class="person__item">
        Hair Color: <b>{{ person.hair_color }}</b>
        <app-color :color="person.hair_color" />
      </li>
      <li class="person__item">
        Height: <b>{{ person.height }}</b>
      </li>
      <li class="person__item">
        Mass: <b>{{ person.mass }}</b>
      </li>
      <li class="person__item">
        Skin Color: <b>{{ person.skin_color }}</b>
        <app-color :color="person.skin_color" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import AppColor from "../components/AppColor.vue";
export default {
  name: "Post",
  components: {
    AppColor,
  },
  props: {
    id: String,
  },
  methods: {
    ...mapActions(["getPerson"]),
  },
  computed: {
    ...mapGetters(["getPersonById"]),
    ...mapState({
      personFromState: (state) => state.person,
    }),
    personFromPeople() {
      return this.getPersonById(this.id);
    },
    person() {
      return this.personFromPeople || this.personFromState || {};
    },
  },
  created() {
    if (!this.personFromPeople) this.getPerson(this.id);
  },
};
</script>

<style lang="scss">
.person {
  &__title {
    margin-bottom: 24px;
  }
  &__list {
    list-style-position: inside;
  }
  &__item {
    display: flex;
    align-items: center;
    b {
      margin: 0 12px;
    }
  }
}
</style>
