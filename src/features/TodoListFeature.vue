<script>
import PrimeTabMenu from "primevue/tabmenu";
import PrimeListBox from "primevue/listbox";
import PrimeCard from "primevue/card";
import PrimeButton from "primevue/button";

import popupName from "@/enums/popupName.js";
import { mapGetters, mapMutations } from "vuex";

let filters = [
  { label: "All", icon: "pi pi-th-large" },
  { label: "In progress", icon: "pi pi-times" },
  { label: "Done", icon: "pi pi-check" },
  { label: "Delete list" },
];

const addTodoCard = [{ label: "ADD NEW TODO", discription: "" }];

const addTodoList = [{ label: "ADD NEW TODO LIST", icon: "pi pi-plus" }];

let listLength;

let currentList = "Anime list";

export default {
  data() {
    return {
      filters,
      addTodoList,
      addTodoCard,
      currentList,
      listLength,
    };
  },
  components: {
    PrimeTabMenu,
    PrimeListBox,
    PrimeCard,
    PrimeButton,
  },
  computed: mapGetters("todoStore", ["getTodos", "getListLength"]),
  methods: {
    ...mapMutations("popupStore", ["openDialog"]),
    openTodoCreatePopup() {
      this.openDialog({
        name: popupName.TODO_CREATE_POPUP,
        props: [],
      });
    },
  },
  mounted() {
    this.listLength = this.getListLength;
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
        <PrimeListBox :options="getTodos" optionLabel="label">
          <template #option="slotProps">
            <div @click="currentList = slotProps.option.label">
              {{ slotProps.option.label }}
            </div>
          </template>
        </PrimeListBox>
      </div>
      <div class="flex flex-column">
        <div>
          <PrimeTabMenu :model="filters" class="flex-wrap mt-2" />
        </div>
        <ul class="todo-card ml-2 mt-2 flex-wrap">
          <li>
            <PrimeCard style="width: 25rem; margin-bottom: 2em">
              <template #title>
                {{ addTodoCard[0].label }}
              </template>
            </PrimeCard>
          </li>
          <div v-for="labels in getTodos" :key="labels">
            <div v-if="labels.label === currentList">
              <div v-for="cards in labels.list" :key="cards.labels"></div>
            </div>
          </div>
          <li>
            <div v-for="labels in getTodos" :key="labels">
              <div v-if="labels.label === currentList">
                <PrimeCard
                  v-for="cards in labels.list"
                  :key="cards.label"
                  style="width: 25rem; margin-bottom: 2em"
                >
                  <template #title>
                    {{ cards.label }}
                  </template>
                  <template #content>
                    <p>{{ cards.discription }}</p>
                    <div class="edit-button">
                      <PrimeButton
                        icon="pi pi-pencil"
                        class="p-button-rounded"
                      />
                    </div>
                    <div class="delete-button">
                      <PrimeButton
                        icon="pi pi-times"
                        class="p-button-rounded p-button-danger"
                      ></PrimeButton>
                    </div>
                  </template>
                </PrimeCard>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
