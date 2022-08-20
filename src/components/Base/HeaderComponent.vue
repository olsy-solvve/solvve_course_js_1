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
          icon: "pi pi-fw pi-home",
          to: { name: routesName.HOME },
        },
        {
          label: "TODO",
          icon: "pi pi-plus",
          to: { name: routesName.TODO },
        },
        {
          label: "ARCHIVE",
          icon: "pi pi-minus",
          to: { name: routesName.ARCHIVE },
        },
        {
          label: "DOC",
          icon: "pi pi-fw pi-file",
          to: { name: routesName.DOC },
        },
      ],
      userConfirmation: false,
      logoImage: "@/assets/logoTodo.svg",
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

<template>
  <PrimeMenubar :model="routes">
    <template #start>
      <div class="menubar-start">
        <div>
          <img
            alt="logo"
            src="@/assets/logoTodo.svg"
            class="menubar-logo-image"
          />
        </div>
        <div class="menubar-logo-text">SUPER PUPER</div>
      </div>
    </template>
    <template #end>
      <div class="menubar-end">
        <div class="col-12 md:col-4">
          <div class="p-inputgroup">
            <PrimeInputText placeholder="Keyword" />
            <BaseButton icon="pi pi-search" class="p-button-warning" />
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
    </template>
  </PrimeMenubar>
</template>

<style lang="scss" scoped>
.p-menubar {
  background-color: beige;

  & .menubar-start {
    @include menubar-start-end;

    & .menubar-logo-image {
      height: 60px;
    }

    & .menubar-logo-text {
      font-family: $app-text-logo;
      font-size: 32px;
      color: brown;
    }
  }

  & .p-menubar-root-list {
    @include menubar-start-end;
  }

  & .menubar-end {
    @include menubar-start-end;
  }
}
</style>
