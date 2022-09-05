<script>
import ButtonPrimeVue from "primevue/button";

export default {
  name: "BaseButton",
  components: {
    ButtonPrimeVue,
  },
};
</script>

<template>
  <ButtonPrimeVue v-model="$attrs">
    <slot></slot>
  </ButtonPrimeVue>
</template>

<style></style>
