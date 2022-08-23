<script>
import PrimeMenubar from "primevue/menubar";
import PrimeInputText from "primevue/inputText";

import routesName from "@/enums/routesName";

export default {
  name: "HeaderComponent",
  data() {
    return {
      currentUser: null,
      switchSizeLgSm: false,
      routes: [
        {
          label: "HOME",
          icon: "pi pi-home",
          to: { name: routesName.HOME },
        },
        {
          label: "TODO",
          icon: "pi pi-calendar-plus",
          to: { name: routesName.TODO },
        },
        {
          label: "ARCHIVE",
          icon: "pi pi-database",
          to: { name: routesName.ARCHIVE },
        },
        {
          label: "DOC",
          icon: "pi pi-file",
          to: { name: routesName.DOC },
        },
      ],
    };
  },
  methods: {
    login() {
      this.$store.commit("userStore/login", { name: "Alex" });
    },
    logout() {
      this.$store.commit("userStore/logout");
    },
    homeRoute() {
      this.$router.push({ name: routesName.HOME });
    },
    updateCurrentWidth() {
      this.switchSizeLgSm = window.innerWidth > 1760 ? true : false;
    },
  },
  computed: {
    userConfirmation() {
      return this.$store.getters["userStore/getUserConfirmation"];
    },
    getUsers() {
      return this.$store.getters["userStore/getUsers"];
    },
    getUser() {
      return this.$store.getters["userStore/getUser"];
    },
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    PrimeMenubar,
    PrimeInputText,
  },
  mounted() {
    window.addEventListener("resize", this.updateCurrentWidth);
  },
};
</script>

<template>
  <header class="sticky top-0 left-0 z-5 w-full" v-show="homePage">
    <PrimeMenubar :model="routes" class="p-1">
      <template #start>
        <div
          class="flex flex-1 flex-row align-items-center justify-content-start pr-1"
        >
          <img
            alt="logo"
            src="@/assets/logoTodo.svg"
            class="header-top-logo-image"
            @click="homeRoute"
          />
          <p
            class="ml-2 header-top-logo-text text-red-700 text-xl sm:text-2xl lg:text-3xl"
          >
            SUPER PUPER
          </p>
        </div>
      </template>
      <template #end>
        <div
          class="flex flex-1 flex-row align-items-center justify-content-end"
        >
          <div class="col-8 hidden md:inline-flex">
            <div class="p-inputgroup">
              <PrimeInputText
                placeholder="Keyword"
                :class="{
                  'p-inputtext-lg': switchSizeLgSm,
                  'p-inputtext-sm': !switchSizeLgSm,
                }"
                class="border-green-500 text-green-700 bg-green-100 font-italic"
              />
              <BaseButton
                icon="pi pi-search"
                :class="{
                  'p-button-lg': switchSizeLgSm,
                  'p-button-sm': !switchSizeLgSm,
                }"
                class="p-button-success"
              />
            </div>
          </div>
          <div v-if="userConfirmation">
            <BaseButton
              label="Logout"
              icon="pi pi-user"
              :class="{
                'p-button-lg': switchSizeLgSm,
                'p-button-sm': !switchSizeLgSm,
              }"
              class="p-button-danger p-button-rounded"
              @click="logout"
            />
          </div>
          <div v-else>
            <BaseButton
              label="Login"
              icon="pi pi-user"
              :class="{
                'p-button-lg': switchSizeLgSm,
                'p-button-sm': !switchSizeLgSm,
              }"
              class="p-button-success p-button-rounded"
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

.header-top-logo-image {
  height: 50px;

  &:hover {
    cursor: pointer;
  }
}

.header-top-logo-text {
  font-family: $app-text-logo;
}

.header-navigation-panel-image {
  height: 40px;
}

/* Portrait tablets and medium desktops */
@media (min-width: 768px) and (max-width: 1024px) {
  .header-top-logo-image {
    height: 50px;
  }
  .header-navigation-panel-image {
    height: 40px;
  }
}
/* Landscape phones and smaller */
@media (max-width: 480px) {
  .header-top-logo-image {
    height: 40px;
  }
  .header-navigation-panel-image {
    height: 30px;
  }
}
</style>
