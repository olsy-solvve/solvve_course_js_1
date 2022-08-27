<script>
import PrimeCard from "primevue/card";
import { mapMutations } from "vuex";
import popupName from "@/enums/popupName.js";
import PrimeToast from "primevue/toast";
export default {
  data() {
    return {};
  },
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  components: {
    PrimeCard,
    PrimeToast,
  },
  methods: {
    ...mapMutations("todoStore", ["changeFilter"]),
    ...mapMutations("popupStore", ["openDialog"]),
    openTodoEditPopup() {
      this.openDialog({
        name: popupName.TODO_EDIT_POPUP,
        props: [],
      });
    },
    // showNewType() {
    //   this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted', life: 3000 });
    // },
  },
};
</script>

<template>
  <PrimeToast position="bottom-right" />
  <PrimeCard
    @click="changeFilter(todo.label), showNewType()"
    :class="{ isDone: todo.completed }"
    style="width: 25rem; margin-bottom: 2em"
  >
    <template #title>
      {{ todo.label }}
    </template>
    <template #content>
      <p>{{ todo.discription }}</p>
      <div class="edit-button">
        <BaseButton
          icon="pi pi-pencil"
          class="p-button-rounded"
          @click.stop=""
          @click="openTodoEditPopup(todo.label)"
        />
      </div>
      <div class="delete-button">
        <BaseButton
          icon="pi pi-times"
          class="p-button-rounded p-button-danger"
          @click.stop=""
        />
      </div>
    </template>
  </PrimeCard>
</template>

<style></style>
