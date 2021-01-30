<template>
  <div class="home">
    <div class="panel">
  <TheHeader> Todo App </TheHeader>
  <AppForm @submit="onSubmit"/>
  <div class="panel-tabs">
  <AppFilter>All</AppFilter>
  <AppFilter>Done</AppFilter>
  <AppFilter>Todo</AppFilter>
  </div>
  
  <ul>
    <AppTodo 
    v-for="todo in todos"
    :key="todo.id"
    :id="todo.id"
    :name="todo.name"
    :done="todo.done"
    @change="onChange"
    />
  </ul>

</div>
  </div>
</template>

<script>
import AppForm from '../components/common/AppForm.vue';
import TheHeader from '../components/TheHeader.vue';
import AppTodo from '../components/common/AppTodo.vue';
import AppFilter from '../components/common/AppFilter.vue';



export default {
  name: 'Home',
  components: { TheHeader, AppForm, AppTodo, AppFilter  },
  data () { 
    return {
      todos: [
        { id: 1, name: " Todo something ", done: false },
        { id: 2, name: " Todo something 2 ", done: true },
        { id: 3, name: " Todo something 3 ", done: false},
      ],
    };
    
  },
  methods: {
    onChange(id) {
     const idx = this.todos.findIndex((todo) => todo.id === id);
     if (idx >= 0) {
       const todo = this.todos[idx];
       this.todos.splice(idx, 1, {...todo, done: !todo.done });
      }
    }, 
    onSubmit(todo) {
      this.todos.push(todo);
    },
  },
};
</script>


