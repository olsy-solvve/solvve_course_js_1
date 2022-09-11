<script>
import MainComponent from "@/components/Base/MainComponent.vue";
import TodoList from "@/components/Todo/TodoList.vue";
import PrimeListBox from "primevue/listbox";
import PrimeOverlayPanel from "primevue/overlaypanel";
import popupName from "@/enums/popupName.js";

import { mapActions, mapGetters, mapMutations } from "vuex";

const filters = {
  ALL: "All",
  PROGRESS: "Progress",
  COMPLETED: "Completed",
};

export default {
  data() {
    return {
      addTodoList: [{ label: "ADD NEW TODO LIST" }],
      currentFilter: filters.ALL,
    };
  },
  components: {
    MainComponent,
    TodoList,
    PrimeListBox,
    PrimeOverlayPanel,
  },
  computed: {
    ...mapGetters("todoStore", [
      "getTodoTypes",
      "getTodosTypes",
      "getTodos",
      "getTodosProgress",
      "getTodosCompleted",
      "getCurrentType",
    ]),
    fillingTodoList() {
      let todos = [];

      switch (this.currentFilter) {
        case filters.ALL: {
          todos = this.getTodos;
          break;
        }
        case filters.PROGRESS: {
          todos = this.getTodosProgress;
          break;
        }
        case filters.COMPLETED: {
          todos = this.getTodosCompleted;
          break;
        }
      }
      return todos;
    },
  },
  methods: {
    ...mapActions("todoStore", ["pullTodoTypes", "pullTodosById", "removeTodoType"]),
    ...mapMutations("todoStore", [
      "changeCurrentType",
      "clearList",
    ]),
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
    getTodosAll() {
      this.currentFilter = filters.ALL;
    },
    getTodosProg() {
      this.currentFilter = filters.PROGRESS;
    },
    getTodosComp() {
      this.currentFilter = filters.COMPLETED;
    },
    toggleFilters(event) {
      this.$refs.filters.toggle(event);
    },
    filterSelected() {
      this.$refs.filters.hide();
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
        <div class="col-12 sm:col-2 md:col-4 lg:col-2 surface-200">
          <div class="flex flex-column justify-content-center">
            <BaseButton
              label="List"
              icon="pi pi-plus"
              class="p-button-rounded p-button-success mb-2 mt-2 m-auto p-button-sm md:p-button"
              @click="openTodoTypeCreatePopup"
            />
            <PrimeListBox :options="getTodoTypes" optionLabel="label">
              <template #option="slotProps">
                <div
                  @click="
                    changeCurrentType({
                      label: slotProps.option.label,
                      id: slotProps.option.id,
                    }),
                      pullTodosById({
                        label: slotProps.option.label,
                        id: slotProps.option.id,
                      })
                  "
                  class="flex flex-row justify-content-between align-items-center"
                >
                  {{ slotProps.option.label }}
                  <i
                    class="pi pi-times"
                    @click.stop="removeTodoType(slotProps.option)"
                  ></i>
                </div>
              </template>
            </PrimeListBox>
          </div>
        </div>
        <div class="col-12 sm:col-10 md:col-8 lg:col-10 pl-3">
          <div class="flex flex-row justify-content-between p-2">
            <div class="hidden md:flex sm:flex-row">
              <BaseButton
                @click="getTodosAll"
                label="All"
                class="p-button-success p-button-rounded p-button-sm md:p-button"
              />
              <BaseButton
                @click="getTodosProg"
                label="In Progress"
                class="p-button-success ml-2 p-button-rounded p-button-sm md:p-button"
              />
              <BaseButton
                @click="getTodosComp"
                label="Done"
                class="p-button-success ml-2 p-button-rounded p-button-sm md:p-button"
              />
            </div>
            <div class="flex md:hidden">
              <BaseButton
                icon="pi pi-filter"
                @click="toggleFilters"
                aria-haspopup="true"
                aria-controls="filtersPopup"
                class="p-button-success p-button-rounded"
              />
              <PrimeOverlayPanel
                ref="filters"
                appendTo="body"
                id="filtersPopup"
              >
                <div class="flex justify-content-center">
                  <BaseButton
                    @click="getTodosAll"
                    label="All"
                    class="p-button-success p-button-rounded p-button-sm"
                  />
                  <BaseButton
                    @click="getTodosProg"
                    label="In Progress"
                    class="p-button-success ml-2 p-button-rounded p-button-sm"
                  />
                  <BaseButton
                    @click="getTodosComp"
                    label="Done"
                    class="p-button-success ml-2 p-button-rounded p-button-sm"
                  />
                </div>
              </PrimeOverlayPanel>
            </div>
            <div>
              <BaseButton
                icon="pi pi-plus"
                class="p-button-success p-button-rounded p-button-sm md:p-button"
                @click="openTodoCreatePopup"
              />
              <BaseButton
                label="Clear List"
                class="p-button-danger ml-2 p-button-rounded p-button-sm md:p-button"
                @click="clearList"
              />
            </div>
          </div>
          <TodoList :todos="fillingTodoList" />
        </div>
      </div>
    </div>
  </MainComponent>
</template>

<style></style>
