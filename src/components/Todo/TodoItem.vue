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
    ...mapMutations("todoStore", ["changeFilter", "removeTodo"]),
    ...mapMutations("popupStore", ["openDialog"]),
    openTodoEditPopup() {
      this.openDialog({
        name: popupName.TODO_EDIT_POPUP,
        param: this.todo,
      });
    },
    showNewType() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Order submitted",
        life: 3000,
      });
    },
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
      <h4 class="text-center">
        {{ todo.label }}
      </h4>
    </template>
    <template #content>
      <p>{{ todo.discription }}</p>
      <div class="flex justify-content-end pt-3">
        <BaseButton
          icon="pi pi-pencil"
          class="p-button-rounded"
          @click.stop="openTodoEditPopup"
        />
        <BaseButton
          icon="pi pi-times"
          class="p-button-rounded p-button-danger ml-2"
          @click.stop="removeTodo(todo.id)"
        />
      </div>
    </template>
  </PrimeCard>
</template>

<style></style>
