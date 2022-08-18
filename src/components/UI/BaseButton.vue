<template>
  <ButtonPrimeVue v-bind="attrs">
    <slot></slot>
  </ButtonPrimeVue>
</template>

<script>
import ButtonPrimeVue from "primevue/button";

export default {
  name: "BaseButton",
  components: {
    ButtonPrimeVue,
  },
};
</script>

<style scoped></style>
