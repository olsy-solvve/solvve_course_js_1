<script>
import PrimeToast from "primevue/toast";
import PrimeCard from "primevue/card";
import { mapMutations } from "vuex";
import popupName from "@/enums/popupName.js";

export default {
  name: "TodoItem",
  data() {
    return {};
  },
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
    ...mapMutations("todoStore", ["changeStateExecution", "addTodoToArchive"]),
    ...mapMutations("popupStore", ["openDialog"]),
    openTodoEditPopup() {
      this.openDialog({
        name: popupName.TODO_EDIT_POPUP,
        param: this.todo,
      });
    },
    showNewState() {
      this.$toast.add({
        severity: "info",
        summary: "HEY!",
        detail: "You changed your TODO`s completing! Be careful!",
        life: 2000,
      });
    },
  },
};
</script>

<template>
  <PrimeToast position="bottom-right" class="opacity-toast" />
  <PrimeCard
    @click="changeStateExecution(todo.label), showNewState()"
    :class="{ isComplete: todo.completed }"
    class="w-screen md:w-20rem lg:w-15rem mb-2"
  >
    <template #title>
      <h4 class="text-center">
        {{ todo.label }}
      </h4>
    </template>
    <template #content>
      <p>{{ todo.description }}</p>
      <div class="flex justify-content-end pt-3">
        <BaseButton
          icon="pi pi-pencil"
          class="p-button-rounded"
          @click.stop="openTodoEditPopup"
        />
        <BaseButton
          icon="pi pi-times"
          class="p-button-rounded p-button-danger ml-2"
          @click.stop="addTodoToArchive(todo._id)"
        />
      </div>
    </template>
  </PrimeCard>
</template>

<style>
.opacity-toast {
  opacity: 0.5;
}

.isComplete {
  opacity: 0.5;
  background-color: rgba(255, 255, 255, 0.861);
}
</style>
