<script>
import TodoList from "@/components/Todo/TodoList.vue";
import PrimeListBox from "primevue/listbox";

import popupName from "@/enums/popupName.js";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      addTodoList: [{ label: "ADD NEW TODO", discription: "" }],
    };
  },
  components: {
    TodoList,
    PrimeListBox,
  },
  computed: mapGetters("todoStore", ["getTodosType"]),
  methods: {
    ...mapMutations("popupStore", ["openDialog"]),
    ...mapMutations("todoStore", ["changeCurrentType"]),
    openTodoCreatePopup() {
      this.openDialog({
        name: popupName.TODO_CREATE_POPUP,
        props: [],
      });
    },
  },
};
</script>

<template>
  <div>
    <div class="flex flex-row">
      <div>
        <PrimeListBox
          :options="addTodoList"
          optionLabel="label"
          @click="openTodoCreatePopup"
        >
        </PrimeListBox>
        <PrimeListBox :options="getTodosType" optionLabel="label">
          <template #option="slotProps">
            <div @click="changeCurrentType(slotProps.option.label)">
              {{ slotProps.option.label }}
            </div>
          </template>
        </PrimeListBox>
      </div>
      <TodoList />
    </div>
  </div>
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
