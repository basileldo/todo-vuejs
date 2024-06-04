<template>
  <div>
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
      v-model="newTodo"
      class="input__lg" />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @remove="removeTodo(todo._id)"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from './ToDoItem.vue';
import axios from 'axios';

export default {
  components: { TodoItem },
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  async created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      const response = await axios.get('http://localhost:5000/todos');
      this.todos = response.data;
    },
    async addTodo() {
      if (this.newTodo.trim()) {
        const response = await axios.post('http://localhost:5000/todos', {
          task: this.newTodo
        });
        this.todos.push(response.data);
        this.newTodo = '';
      }
    },
    async removeTodo(id) {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      this.todos = this.todos.filter(todo => todo._id !== id);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
