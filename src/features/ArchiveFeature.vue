<script>
import MainComponent from "@/components/Base/MainComponent.vue";
import ArchiveTodoList from "../components/Archive/ArchiveTodoList.vue";
import PrimeListBox from "primevue/listbox";

import { mapGetters, mapMutations } from "vuex";
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  data() {
    return {
      todos: [],
    };
  },
  components: {
    MainComponent,
    ArchiveTodoList,
    PrimeListBox,
    BaseButton,
  },
  computed: mapGetters("todoStore", ["getRemovedType"]),
  methods: {
    ...mapMutations("todoStore", ["changeCurrentType"]),
    getRemovedTodos() {
      this.todos = this.$store.getters["todoStore/getRemovedTodos"];
    },
  },
};
</script>

<template>
  <MainComponent>
    <div class="w-full">
      <div class="grid grid-nogutter h-auto sm:h-screen">
        <div
          class="col-12 sm:col-2 md:col-4 lg:col-2 surface-200 flex flex-column"
        >
          <PrimeListBox :options="getRemovedType" optionLabel="label">
            <template #option="slotProps">
              <div
                @click="
                  changeCurrentType(slotProps.option.label), getRemovedTodos()
                "
                class="flex flex-row justify-content-between align-items-center"
              >
                {{ slotProps.option.label }}
              </div>
            </template>
          </PrimeListBox>
        </div>
        <div class="col-12 sm:col-10 md:col-8 lg:col-10 pl-3">
          <div
            class="flex flex-row justify-content-between p-2 hidden md:flex sm:flex-row"
          >
            <BaseButton
              label="Delete current list"
              class="p-button-danger p-button-rounded p-button-sm md:p-button"
            />
          </div>
          <ArchiveTodoList :todos="todos" />
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
