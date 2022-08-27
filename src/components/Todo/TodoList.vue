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
  <div class="flex flex-column">
    <div class="flex flex-row flex-wrap p-4">
      <div v-for="todo in todos" :key="todo.label" class="m-2">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<style>
.isComplete {
  opacity: 0.5;
  background-color: rgba(255, 255, 255, 0.861);
}
</style>
