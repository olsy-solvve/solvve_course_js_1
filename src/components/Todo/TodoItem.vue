<script>
import PrimeCard from "primevue/card";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  components: {
    PrimeCard,
  },
};
</script>
<!-- @click="todo.completed = !todo.completed" -->

<template>
  <PrimeCard style="width: 25rem; margin-bottom: 2em">
    <template #title>
      {{ todo.label }}
    </template>
    <template #content>
      <p>{{ todo.discription }}</p>
      <div class="edit-button">
        <BaseButton icon="pi pi-pencil" class="p-button-rounded" />
      </div>
      <div class="delete-button">
        <BaseButton icon="pi pi-times" class="p-button-rounded p-button-danger" />
      </div>
    </template>
  </PrimeCard>
</template>

<style>
</style>
