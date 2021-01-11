<template>
  <li class="todo">
    <div class="todo__row">
      <span class="todo__order">{{ order }}</span>
      <app-status class="todo__status" :success="todo.success" />
      <h3 class="todo__name">{{ todo.name }}</h3>
    </div>
    <div class="todo__buttons">
      <app-button
        class="todo__button"
        :type="todo.success ? 'warning' : 'success'"
        @click="onChangeStatus"
        >{{ todo.success ? "Undone" : "Done" }}</app-button
      >
      <app-button class="todo__button" type="danger" @click="onDelete"
        >Delete</app-button
      >
    </div>
  </li>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppStatus from "./AppStatus.vue";
export default {
  components: { AppStatus, AppButton },
  name: "AppTodo",
  props: {
    order: Number,
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onChangeStatus() {
      this.$emit("change-status", this.todo.id);
    },
    onDelete() {
      this.$emit("delete", this.todo.id);
    },
  },
};
</script>

<style lang="scss">
$style: todo;
.#{$style} {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  &__row {
    display: flex;
    align-items: center;
  }
  &__status {
    margin-right: 24px;
  }
  &__order {
    width: 24px;
  }
  &__name {
    font-weight: 500;
    font-size: 18px;
  }
  &__button {
    &:not(:last-of-type) {
      margin-right: 16px;
    }
  }
}
</style>