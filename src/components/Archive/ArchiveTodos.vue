<script>
import PrimeCard from "primevue/card";
import PrimeToast from "primevue/toast";
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
    check() {
      console.log(this.todo);
    },
  },
};
</script>

<template>
  <PrimeToast position="bottom-right" class="opacityToast" />
  <PrimeCard
    :class="{ isDone: todo.completed }"
    style="width: 25rem; margin-bottom: 2em"
    @click="check"
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
          @click.stop="showDeletedToas()"
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
