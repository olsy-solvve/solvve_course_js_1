<script>
import ArchiveTodos from "@/components/Archive/ArchiveTodos.vue";

export default {
  name: "ArchiveTodoList",
  props: {
    todos: {
      type: Object,
      required: true,
    },
  },
  components: {
    ArchiveTodos,
  },
};
</script>

<template>
  <div class="flex flex-row flex-wrap justify-content-evenly">
    <div v-for="todo in todos" :key="todo.label" class="mt-2">
      <ArchiveTodos :todo="todo" />
    </div>
  </div>
</template>

<style>
.isComplete {
  opacity: 0.5;
  background-color: rgba(255, 255, 255, 0.861);
}
</style>
