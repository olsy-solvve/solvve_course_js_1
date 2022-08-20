<script>
import PrimeMenubar from "primevue/menubar";
import PrimeInputText from "primevue/inputText";

import routesName from "@/enums/routesName";

export default {
  name: "HeaderComponent",
  data() {
    return {
      routes: [
        {
          label: "HOME",
          icon: "pi  pi-home",
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
      userConfirmation: false,
      logoImage: "@/assets/logoTodo.svg",
      headerNavigation: "@/assets/headerNavigation.svg",
    };
  },
  methods: {},
  computed: {},
  components: {
    PrimeMenubar,
    PrimeInputText,
  },
};
</script>

<!-- https://coreui.io/vue/docs/layout/breakpoints.html -->
<!-- sm: small screens e.g. phones
md: medium screens e.g. tablets
lg: large screens e.g. notebooks
xl: larger screens e.g monitors -->

<template>
  <header class="sticky w-full top-0 left-0 z-5 bg-bluegray-100">
    <div class="flex flex-row p-2">
      <div
        class="flex flex-1 flex-row justify-content-start align-items-center"
      >
        <img alt="logo" src="@/assets/logoTodo.svg" class="header-logo-image" />
        <p class="ml-3 text-red-700 header-logo-text">SUPER PUPER</p>
      </div>
      <div class="flex flex-1 flex-row justify-content-end align-items-center">
        <div class="col-8 hidden md:inline-flex">
          <div class="p-inputgroup">
            <PrimeInputText placeholder="Keyword" />
            <BaseButton icon="pi pi-search" class="p-button-success" />
          </div>
        </div>
        <div v-if="userConfirmation">
          <BaseButton
            label="Logout"
            icon="pi pi-user"
            class="p-button-danger"
          />
        </div>
        <div v-else>
          <BaseButton
            label="Login"
            icon="pi pi-user"
            class="p-button-success"
          />
        </div>
      </div>
    </div>
    <div>
      <PrimeMenubar :model="routes">
        <template #start>
          <img
            alt="logo"
            src="@/assets/headerNavigation.svg"
            class="header-navigation-image"
          />
        </template>
      </PrimeMenubar>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-logo-image {
  height: 60px;
}
.header-logo-text {
  font-family: $app-text-logo;
  font-size: 36px;
}

.header-navigation-image {
  height: 40px;
}

@media (max-width: 768px) {
  .header-logo-image {
    height: 50px;
  }
  .header-logo-text {
    font-family: $app-text-logo;
    font-size: 32px;
  }
  .header-navigation-image {
    height: 35px;
  }
}

@media (max-width: 576px) {
  .header-logo-image {
    height: 40px;
  }
  .header-logo-text {
    font-family: $app-text-logo;
    font-size: 24px;
  }
  .header-navigation-image {
    height: 30px;
  }
}
</style>
