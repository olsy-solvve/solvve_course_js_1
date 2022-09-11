<script>
import TodoItem from "@/components/Todo/TodoItem.vue";

export default {
  name: "TodoList",
  props: {
    todos: {
      type: Object,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<template>
  <div class="flex flex-row flex-wrap justify-content-evenly">
    <div v-for="todo in todos" :key="todo.id" class="mt-2">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<style></style>
