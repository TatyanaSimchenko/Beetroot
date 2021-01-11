<template>
  <form class="form" @submit.prevent="addTodo">
    <input class="form__input" required v-model.trim="todo" type="text" />
    <app-button class="form__button" :disabled="disabled">Add TODO</app-button>
    <transition
      enter-active-class="animate__animated animate__flipInX animate__fast"
      leave-active-class="animate__animated animate__flipOutX animate__fast"
    >
      <div v-if="disabled" class="form__message">{{ message }}</div>
    </transition>
  </form>
</template>

<script>
import AppButton from './AppButton.vue';
export default {
  name: "AppForm",
  components: {
    AppButton
  },
  props: {
    todoList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addTodo() {
      const { todo, disabled } = this;
      if (todo && !disabled) {
        const newTodo = {
          id: String(Date.now()),
          name: todo,
          success: false,
        };
        this.$emit("submit", newTodo);
        this.todo = "";
      }
    },
  },
  computed: {
    message() {
      const hasEqual = this.todoList.some(
        ({ name }) => name.toLowerCase() === this.todo.toLowerCase()
      );
      if (hasEqual) return "This TODO already exist";
      return "";
    },
    disabled() {
      return !!this.message;
    },
  },
};
</script>

<style lang="scss">
.form {
  padding: 24px 32px;
  background-color: $C200;
  &__input {
    margin-right: 12px;
  }
  &__message {
    padding: 12px 0 0;
    color: black;
  }
}
.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.5s;
}
.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
}
</style>