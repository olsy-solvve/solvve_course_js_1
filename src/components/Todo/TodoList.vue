<script>
import PrimeCard from "primevue/card";
import TodoItem from "@/components/Todo/TodoItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
      addTodoCard: [{ label: "ADD NEW TODO LIST", icon: "pi pi-plus" }],
    };
  },
  components: {
    TodoItem,
    PrimeCard,
  },
  computed: mapGetters("todoStore", [
    "getTodos",
    "getTodosCompleted",
    "getTodosProgress",
  ]),
  methods: {
    getTodoList() {
      this.todos = this.getTodos;
    },
    getTodosP() {
      this.todos = this.getTodosProgress;
    },
    getTodosC() {
      this.todos = this.getTodosCompleted;
    },
  },
  mounted() {
    this.todos = this.getTodos;
  },
};
</script>

<template>
  <div class="flex flex-column">
    <div>
      <BaseButton
        @click="getTodoList"
        label="All"
        class="p-button-success ml-2"
      />
      <BaseButton
        @click="getTodosP"
        label="In progress"
        class="p-button-success ml-2"
      />
      <BaseButton
        @click="getTodosC"
        label="Done"
        class="p-button-success ml-2"
      />
      <BaseButton label="Delete list" class="p-button-danger ml-2" />
    </div>
    <li>
      <PrimeCard style="width: 25rem; margin-bottom: 2em">
        <template #title>
          {{ addTodoCard[0].label }}
        </template>
      </PrimeCard>
    </li>
    <div class="flex flex-row flex-wrap p-4">
      <div v-for="todo in todos" :key="todo.label">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<style></style>
