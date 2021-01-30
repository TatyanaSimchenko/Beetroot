<template>
  <div class="home">
    <div class="panel">
      <TheHeader> Todo App </TheHeader>
      <AppForm @submit="onSubmit" />
      <div class="panel-tabs filteres has-background-info-light">
        <AppFilter
          v-for="item in filteres"
          :key="item.value"
          :checked="item.value === filter"
          :value="item.value"
          @change="filter = item.value"
          >{{ item.name }}</AppFilter
        >
      </div>

      <ul>
        <AppTodo
          v-for="todo in filteredTodos"
          :key="todo.id"
          :id="todo.id"
          :name="todo.name"
          :done="todo.done"
          @change="onChange"
          @delete="onDelete"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import AppForm from "../components/common/AppForm.vue";
import TheHeader from "../components/TheHeader.vue";
import AppTodo from "../components/common/AppTodo.vue";
import AppFilter from "../components/common/AppFilter.vue";

export default {
  name: "Home",
  components: { TheHeader, AppForm, AppTodo, AppFilter },
  data() {
    return {
      filteres: [
        { value: "all", name: "All" },
        { value: "done", name: "Done" },
        { value: "todo", name: "Todo" },
      ],
      filter: "all",
      todos: [
        { id: 1, name: " Todo something ", done: false },
        { id: 2, name: " Todo something 2 ", done: true },
        { id: 3, name: " Todo something 3 ", done: false },
      ],
    };
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(({ done }) => {
        switch (this.filter) {
          case "done":
            return done;
          case "todo":
            return !done;
          default:
            return true;
        }
      });
    },
  },
  methods: {
    onChange(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);
      if (idx >= 0) {
        const todo = this.todos[idx];
        this.todos.splice(idx, 1, { ...todo, done: !todo.done });
      }
    },
    onDelete(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);
      if (idx >= 0) {
        this.todos.splice(idx, 1);
      }
    },
    onSubmit(todo) {
      const hasEqual = this.todos.some(
        (item) => item.name.toLowerCase() === todo.name.toLowerCase()
      );
      if (!hasEqual) {
        this.todos.push(todo);
      } else {
        alert("This already exists!");
      }
    },
  },
};
</script>
