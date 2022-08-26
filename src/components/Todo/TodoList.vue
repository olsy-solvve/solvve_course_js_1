<script>
import PrimeCard from "primevue/card";
import TodoItem from "@/components/Todo/TodoItem.vue";

export default {
  name: "TodoList",
  data() {
    return {
      addTodoCard: [{ label: "ADD NEW TODO LIST", icon: "pi pi-plus" }],
    };
  },
  props: {
    todos: {
      type: Object,
      required: true,
    }
  },
  components: {
    TodoItem,
    PrimeCard,
  },
  computed: {},
  methods: {
  },
  mounted() {
    this.getTodosAll;
  },
};
</script>

<template>
  <div class="flex flex-column">
    <!-- <PrimeCard style="width: 25rem; margin-bottom: 2em">
      <template #title>
        {{ addTodoCard[0].label }}
      </template>
    </PrimeCard> -->
    <div class="flex flex-row flex-wrap p-4">
      <div v-for="todo in todos" :key="todo.label">
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
