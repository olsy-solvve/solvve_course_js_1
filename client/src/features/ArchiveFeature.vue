<script>
import MainComponent from "@/components/Base/MainComponent.vue";
import ArchiveTodoList from "../components/Archive/ArchiveTodoList.vue";
import PrimeListBox from "primevue/listbox";

import { mapActions, mapGetters, mapMutations } from "vuex";

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
  },
  computed: mapGetters("todoStore", [
    "getRemovedTodoTypes",
    "getTodosTypes",
    "getTodosProgress",
    "getRemovedTodos",
    "getTodosCompleted",
    "getCurrentType",
  ]),
  methods: {
    ...mapActions("todoStore", ["pullTodoTypes", "pullTodosById"]),
    ...mapMutations("todoStore", ["changeCurrentType"]),
    getAllTodos() {
      return this.getRemovedTodos;
    },
  },
  mounted() {
    this.pullTodoTypes();
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
          <PrimeListBox :options="getRemovedTodoTypes" optionLabel="label">
            <template #option="slotProps">
              <div
                @click="
                  changeCurrentType({
                    label: slotProps.option.label,
                    id: slotProps.option.id,
                    removed: slotProps.option.removed,
                  }),
                    pullTodosById({
                      label: slotProps.option.label,
                      id: slotProps.option.id,
                      removed: slotProps.option.removed,
                    })
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
          <ArchiveTodoList :todos="getAllTodos()" />
        </div>
      </div>
    </div>
  </MainComponent>
</template>

<style></style>
