<script>
import PrimeCard from "primevue/card";
import PrimeToast from "primevue/toast";
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  name: "ArchiveTodos",
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
    ...mapMutations("todoStore", ["deleteTodo"]),
    showDeletedToast() {
      this.$toast.add({
        severity: "info",
        summary: "HEY!",
        detail: "You deleted your TODO! Be careful!",
        life: 2000,
      });
    },
    deleteTodos(label) {
      this.deleteTodo(label);
    },
  },
};
</script>

<template>
  <PrimeToast position="bottom-right" class="opacityToast" />
  <PrimeCard
    :class="{ isDone: todo.completed }"
    style="width: 25rem; margin-bottom: 2em"
    class="w-screen md:w-20rem lg:w-15rem mb-2"
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
          icon="pi pi-times"
          class="p-button-rounded p-button-danger ml-2"
          @click.stop="showDeletedToast"
          @click="deleteTodos(todo.label)"
        />
      </div>
    </template>
  </PrimeCard>
</template>

<style>
.opacityToast {
  opacity: 0.5;
}
</style>
