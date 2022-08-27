<script>
import MainComponent from "@/components/Base/MainComponent.vue";
import TodoList from "@/components/Todo/TodoList.vue";
import PrimeListBox from "primevue/listbox";
import popupName from "@/enums/popupName.js";

import { mapGetters, mapMutations } from "vuex";
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  data() {
    return {
      todos: [],
      addTodoList: [{ label: "ADD NEW TODO LIST" }],
    };
  },
  components: {
    MainComponent,
    TodoList,
    PrimeListBox,
    BaseButton,
  },
  computed: mapGetters("todoStore", ["getTodosType"]),
  methods: {
    ...mapMutations("todoStore", ["changeCurrentType"]),
    ...mapMutations("popupStore", ["openDialog"]),
    openTodoTypeCreatePopup() {
      this.openDialog({
        name: popupName.TODO_TYPE_CREATE_POPUP,
        props: [],
      });
    },
    openTodoCreatePopup() {
      this.openDialog({
        name: popupName.TODO_CREATE_POPUP,
        props: [],
      });
    },
    getTodosC() {
      this.todos = this.$store.getters["todoStore/getTodosCompleted"];
    },
    getTodosP() {
      this.todos = this.$store.getters["todoStore/getTodosProgress"];
    },
    getTodosAll() {
      this.todos = this.$store.getters["todoStore/getTodos"];
    },
  },
};
</script>

<template>
  <MainComponent>
    <div class="h-screen">
      <div class="flex flex-row">
        <div>
          <PrimeListBox
            :options="addTodoList"
            optionLabel="label"
            @click="openTodoTypeCreatePopup"
          >
          </PrimeListBox>
          <PrimeListBox :options="getTodosType" optionLabel="label">
            <template #option="slotProps">
              <div
                @click="
                  changeCurrentType(slotProps.option.label), getTodosAll()
                "
              >
                {{ slotProps.option.label }}
              </div>
            </template>
          </PrimeListBox>
        </div>
        <div class="m-2">
          <div class="flex flex-row justify-content-between p-2">
            <BaseButton
              @click="getTodosAll"
              label="All"
              class="p-button-success ml-2 p-button-rounded"
            />
            <BaseButton
              @click="getTodosP"
              label="In progress"
              class="p-button-success ml-2 p-button-rounded"
            />
            <BaseButton
              @click="getTodosC"
              label="Done"
              class="p-button-success ml-2 p-button-rounded"
            />
            <BaseButton
              icon="pi pi-plus"
              class="p-button-success ml-2 p-button-rounded"
              @click="openTodoCreatePopup"
            />
            <BaseButton
              label="Delete list"
              class="p-button-danger ml-2 p-button-rounded"
            />
          </div>
          <TodoList :todos="todos" />
        </div>
      </div>
    </div>
  </MainComponent>
</template>

<style>
.edit-button {
  padding-bottom: 8px;
  padding-left: 320px;
}

.todo-card {
  list-style-type: none;
}

body {
  background-color: rgba(255, 255, 255, 0.235);
}

.delete-button {
  padding-left: 320px;
}

.isDone {
  opacity: 0.5;
  background-color: rgb(255, 255, 255);
}
</style>
