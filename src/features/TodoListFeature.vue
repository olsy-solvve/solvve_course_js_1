<script>
import PrimeTabMenu from "primevue/tabmenu";
import "primeicons/primeicons.css";
import PrimePanelMenu from "primevue/panelmenu";
import PrimeCard from "primevue/card";
import PrimeButton from "primevue/button";

let filters = [
  { label: "All", icon: "pi pi-th-large" },
  { label: "In progress", icon: "pi pi-times" },
  { label: "Done", icon: "pi pi-check" },
  { label: "Delete list" },
];

const addTodoCard = [{ label: "ADD NEW TODO", discription: "" }];

const addTodoList = [{ label: "", icon: "pi pi-plus" }];

let todoList = [
  {
    label: "Home things",
    list: [
      {
        label: "Clean room",
        disription: "And faster!",
      },
      {
        label: "Wash dishes",
        discription: null,
      },
    ],
  },
  {
    label: "Work",
    list: [{ label: "Progect" }, { label: "Call to Sam" }],
  },
  {
    label: "Univercity",
    list: [{ label: "End lection" }, { label: "Create design" }],
  },
  {
    label: "Family",
    list: [{ label: "Call to mam" }, { label: "Buy a doll for Kristy" }],
  },
  {
    label: "Anime list",
    list: [
      {
        label: "Death Note",
        discription:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
      },
      { label: "Fairy Tale", discription: "3rd season is out!" },
      { label: "Naruto", discription: "Let`s just try..." },
    ],
  },
];

export default {
  data() {
    return {
      filters,
      todoList,
      addTodoList,
      addTodoCard,
    };
  },
  components: {
    PrimeTabMenu,
    PrimePanelMenu,
    PrimeCard,
    PrimeButton,
  },
};
</script>

<template>
  <div>
    <div class="under-panel-menu"></div>
    <div>
      <PrimePanelMenu :model="addTodoList" class="add-todo-list">
      </PrimePanelMenu>
      <PrimePanelMenu :model="todoList" class="panel-menu"> </PrimePanelMenu>
    </div>

    <div class="filter-todos-position">
      <PrimeTabMenu :model="filters" class="filter-todos" />
      <router-view />
    </div>

    <ul class="todo-card">
      <li>
        <PrimeCard style="width: 25rem; margin-bottom: 2em">
          <template #title>
            {{ addTodoCard[0].label }}
          </template>
        </PrimeCard>
      </li>
      <li>
        <PrimeCard
          v-for="labels in todoList[todoList.length - 1].list"
          :key="labels.label"
          style="width: 25rem; margin-bottom: 2em"
        >
          <template #title>
            {{ labels.label }}
          </template>
          <template #content>
            <p>{{ labels.discription }}</p>
            <div class="edit-button">
              <PrimeButton icon="pi pi-pencil" class="p-button-rounded" />
            </div>
            <div class="delete-button">
              <PrimeButton
                icon="pi pi-times"
                class="p-button-rounded p-button-danger"
              ></PrimeButton>
            </div>
          </template>
        </PrimeCard>
      </li>
    </ul>
  </div>
</template>

<style>
.edit-button {
  padding-bottom: 8px;
  padding-left: 320px;
}

.under-panel-menu {
  height: 100%;
  position: absolute;
  width: 20em;
  max-width: 100%;
  top: 12.2em;
  background-color: rgba(255, 255, 255, 0.367);
}

.add-todo-list {
  width: 20em;
  max-width: 100%;
  min-height: 2em;
  position: absolute;
}

.panel-menu {
  width: 20em;
  max-width: 100%;
  min-height: 2em;
  position: absolute;
  top: 12.2em;
}

.filter-todos {
  width: 200em;
  max-width: 100%;
  min-height: 2em;
}

.todo-card {
  list-style-type: none;
  padding-left: 400px;
}

body {
  background-color: #eff3f8;
}

.filter-todos-position {
  padding-left: 320px;
}

.delete-button {
  padding-left: 320px;
}
</style>
