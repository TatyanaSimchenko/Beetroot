<template>
  <div id="app" class="app">
    <app-header title="TODO List" />
    <app-form :todo-list="todoList" @submit="onSubmit" />

    <transition-group class="app__list" name="list-complete" tag="ul">
      <app-todo
        class="app__todo list-complete-item"
        v-for="(todo, idx) in sorted"
        :todo="todo"
        :order="idx"
        :key="todo.id"
        @delete="onDelete"
        @change-status="onChangeStatus"
      />
    </transition-group>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppForm from "./components/AppForm";
import AppTodo from "./components/AppTodo";
export default {
  name: "App",
  components: {
    AppHeader,
    AppForm,
    AppTodo,
  },
  data() {
    return {
      todo: "",
      todoList: [
        { id: 1, name: "Todo 1", success: true },
        { id: 2, name: "Todo 2", success: false },
        { id: 3, name: "Todo 3", success: false },
      ],
    };
  },
  methods: {
    onSubmit(todo) {
      this.todoList.push(todo);
    },
    onDelete(id) {
      const idx = this.todoList.findIndex((todo) => todo?.id === id);
      if (idx >= 0) {
        this.todoList.splice(idx, 1);
      }
    },
    onChangeStatus(id) {
      const { todoList } = this;
      const idx = todoList.findIndex((todo) => todo?.id === id);
      if (idx >= 0) {
        const todo = todoList[idx];
        todoList.splice(idx, 1, { ...todo, success: !todo.success });
      }
    },
  },
  computed: {
    sorted() {
      const shallowCopy = [...this.todoList];
      return shallowCopy.sort((a, b) =>
        a.success === b.success ? 0 : a.success ? -1 : 1
      );
    },
  },
};
</script>
<style lang="scss">
.app {
  &__list {
    padding: 24px 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  &__todo {
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
}
.list-complete-item {
  transition: all 0.2s;
  display: inline-flex;
  // margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
.list-complete-leave-active {
  position: absolute;
}
// .list-complete-move {
//   transition: transform 0.2s;
// }
</style>