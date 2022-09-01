<script>
import HeaderComponent from "@/components/Base/HeaderComponent.vue";
import FooterComponent from "@/components/Base/FooterComponent.vue";
import TodoCreatePopup from "@/components/UI/TodoCreatePopup.vue";
import TodoEditPopup from "@/components/UI/TodoEditPopup.vue";
import TodoTypeCreatePopup from "@/components/UI/TodoTypeCreatePopup.vue";
import PrivacyPolicyPopup from "@/components/UI/PrivacyPolicyPopup.vue";
import TermsOfUsePopup from "@/components/UI/TermsOfUsePopup.vue";
import SuperPuperPopup from "@/components/UI/SuperPuperPopup.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    TodoCreatePopup,
    TodoTypeCreatePopup,
    TodoEditPopup,
    PrivacyPolicyPopup,
    TermsOfUsePopup,
    SuperPuperPopup,
  },
  computed: mapGetters("popupStore", ["getPopups"]),
};
</script>

<template>
  <div>
    <component
      v-for="popup in getPopups"
      :key="popup.name"
      :is="popup.name"
      :param="popup.param"
    />
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style lang="scss"></style>
