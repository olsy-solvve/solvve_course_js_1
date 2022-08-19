<script setup>
import HeaderComponent from "@/components/Base/HeaderComponent.vue";
import MainComponent from "@/components/Base/MainComponent.vue";
import FooterComponent from "@/components/Base/FooterComponent.vue";
</script>

<template>
  <div>
    <HeaderComponent />
    <MainComponent>
      <RouterView />
    </MainComponent>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
