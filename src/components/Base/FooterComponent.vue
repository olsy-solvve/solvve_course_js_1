<script>
import PrimeCard from "primevue/card";
import { mapMutations } from "vuex";

import routesName from "@/enums/routesName";
import popupName from "@/enums/popupName.js";

export default {
  name: "FooterComponent",
  data() {
    return {
      year: new Date().getFullYear(),
      developers: [
        {
          name: "Anastasia",
          link: "https://github.com/keysiu",
        },
        {
          name: "Taras",
          link: "https://github.com/polokop",
        },
        {
          name: "Denys",
          link: "https://github.com/Krian-md",
        },
        {
          name: "Serhii_Y",
          link: "https://github.com/sy5989pro",
        },
        {
          name: "Serhii_K",
          link: "https://github.com/Serioagka",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("popupStore", ["openDialog"]),
    docRoute() {
      this.$router.push({ name: routesName.DOC });
    },
    openPrivacyPolicy() {
      this.openDialog({
        name: popupName.PRIVACY_POLICY_POPUP,
        props: [],
      });
    },
    openTermsOfUse() {
      this.openDialog({
        name: popupName.TERMS_OF_USE,
        props: [],
      });
    },
    openSuperPuper() {
      this.openDialog({
        name: popupName.SUPERPUPER,
        props: [],
      });
    },
  },
  components: {
    PrimeCard,
  },
};
</script>

<template>
  <footer>
    <PrimeCard class="surface-500 text-100">
      <template #content>
        <h3 class="text-center mb-2">Questions?</h3>
        <div
          class="flex flex-column align-items-center justify-content-center gap-3 text-xs sm:text-base lg:text-lg"
        >
          <p>
            Drop us a line at
            <span class="underline cursor-pointer">hello@superpuper.com</span>
          </p>
          <ul class="flex gap-3 list-none">
            <a
              v-for="developer in developers"
              :key="developer.name"
              :href="developer.link"
              class="no-underline text-red-700 cursor-pointer"
            >
              <li><i class="pi pi-github"></i> {{ developer.name }}</li>
            </a>
          </ul>
        </div>
        <div
          class="flex flex-column align-items-center mt-2 text-xs sm:text-base lg:text-lg"
        >
          <div class="flex gap-3">
            <a
              class="no-underline text-red-700 cursor-pointer"
              @click="openPrivacyPolicy"
              >Privacy Policy</a
            >
            <a
              class="no-underline text-red-700 cursor-pointer"
              @click="openTermsOfUse"
              >Terms of Use</a
            >
            <a
              class="no-underline text-red-700 cursor-pointer"
              @click="openSuperPuper"
              >&copy;2022 SUPERPUPER</a
            >
          </div>
          <p>Copyright &copy; {{ year }}</p>
        </div>
      </template>
    </PrimeCard>
  </footer>
</template>

<style lang="scss"></style>
