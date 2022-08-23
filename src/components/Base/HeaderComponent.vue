<script>
import PrimeMenubar from "primevue/menubar";
import PrimeInputText from "primevue/inputText";

import routesName from "@/enums/routesName";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
      sourchText: "",
    };
  },
  methods: {
    ...mapMutations("userStore", ["logout"]),
    login() {
      this.$router.push({ name: routesName.AUTH });
    },
    homeRoute() {
      this.$router.push({ name: routesName.HOME });
    },
  },
  computed: {
    ...mapGetters("userStore", ["getUserConfirmation"]),
    ...mapGetters("routerStore", ["getRoutes"]),
  },
  components: {
    PrimeMenubar,
    PrimeInputText,
  },
};
</script>

<template>
  <header class="sticky top-0 left-0 z-5 w-full">
    <PrimeMenubar :model="getRoutes" class="p-1">
      <template #start>
        <div
          class="flex flex-1 flex-row align-items-center justify-content-start pl-2"
        >
          <img
            alt="logo"
            src="@/assets/logoTodo.svg"
            class="h-3rem cursor-pointer"
            @click="homeRoute"
          />
          <p
            class="ml-2 text-red-700 text-2xl sm:text-3xl lg:text-4xl header-top-logo-text"
          >
            SUPER PUPER
          </p>
        </div>
      </template>
      <template #end>
        <div
          class="flex flex-1 flex-row align-items-center justify-content-end pr-2"
        >
          <div class="col-8 hidden md:inline-flex">
            <div class="p-inputgroup">
              <PrimeInputText
                v-model="sourchText"
                placeholder="Keyword"
                class="p-inputtext-sm xl:p-inputtext border-green-500 font-italic"
              />
              <BaseButton
                icon="pi pi-search"
                class="p-button-sm xl:p-button p-button-success p-button-outlined"
              />
            </div>
          </div>
          <div v-if="getUserConfirmation">
            <BaseButton
              label="Logout"
              icon="pi pi-user"
              class="p-button-sm xl:p-button p-button-danger p-button-rounded p-button-outlined"
              @click="logout"
            />
          </div>
          <div v-else>
            <BaseButton
              label="Login"
              icon="pi pi-user"
              class="p-button-sm xl:p-button p-button-success p-button-rounded p-button-outlined"
              @click="login"
            />
          </div>
        </div>
      </template>
    </PrimeMenubar>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: $header-footer-background;
}
.header-top-logo-text {
  font-family: $app-text-logo;
}
</style>
