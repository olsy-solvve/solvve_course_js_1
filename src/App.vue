<script>
import HeaderComponent from "@/components/Base/HeaderComponent.vue";
import MainComponent from "@/components/Base/MainComponent.vue";
import FooterComponent from "@/components/Base/FooterComponent.vue";
import TodoPopup from "@/components/UI/TodoPopup.vue";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TodoPopup,
  },
  computed: {
    getPopups() {
      return this.$store.getters["popupStore/getPopups"];
    },
  },
};
</script>

<template>
  <div>
    <component v-for="popup in getPopups" :key="popup.name" :is="popup.name" />
    <HeaderComponent />
    <MainComponent>
      <RouterView />
    </MainComponent>
    <FooterComponent />
  </div>
</template>

<style lang="scss"></style>
