import Vue from "vue";
import Vuex from "vuex";
import { API } from "../api";

const http = new API();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    people: [],
    person: null,
  },
  mutations: {
    peopleRequest(state) {
      state.loading = true;
    },
    peopleSuccess(state) {
      state.loading = false;
    },
    peopleUpdate(state, people) {
      state.people = [...people];
    },
    personUpdate(state, person) {
      state.person = { ...person };
    },
    peopleCountUpdate(state, count) {
      state.peopleCount = count;
    },
  },
  actions: {
    async getPeople({ commit }) {
      commit("peopleRequest");
      const data = await http.getPeople();
      commit("peopleSuccess");
      if (data) {
        commit("peopleUpdate", data);
      }
    },
    async getPerson({ commit }, id) {
      commit("peopleRequest");
      const data = await http.getPerson(id);
      console.log(data);
      commit("peopleSuccess");
      if (data) {
        commit("personUpdate", data);
      }
    },
  },
  getters: {
    peopleCount(state) {
      return state.people.length;
    },
    havePeople(state) {
      return !!state.people.length;
    },
    getPersonById: (state) => (id) => {
      return state.people.find((person) => person.id === id);
    },
  },
  modules: {},
});
