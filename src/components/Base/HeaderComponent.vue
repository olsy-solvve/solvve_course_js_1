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
          title: "HOME",
          route: this.homeRoute,
        },
        {
          title: "TODO",
          route: this.todoRoute,
        },
        {
          title: "ARCHIVE",
          route: this.archiveRoute,
        },
        {
          title: "DOC",
          route: this.docRoute,
        },
      ],
    };
  },
  components: {
    PrimeMenubar,
    PrimeInputText,
  },
  methods: {
    homeRoute() {
      console.log(routesName.HOME);
      this.$router.push({ name: routesName.HOME });
    },
    todoRoute() {
      this.$router.push({ name: routesName.TODO });
    },
    archiveRoute() {
      this.$router.push({ name: routesName.ARCHIVE });
    },
    docRoute() {
      this.$router.push({ name: routesName.DOC });
    },
  },
};
</script>

<template>
  <PrimeMenubar>
    <template #start>
      <img
        alt="logo"
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        height="40"
        class="mr-2"
      />
      <h3>SUPER PUPER</h3>
      <a
        v-for="{ title, route } in routes"
        :key="title"
        :header="title"
        @click="route"
        class="header-route"
        >{{ title }}</a
      >
    </template>
    <template #end>
      <PrimeInputText placeholder="Search" type="text" />
    </template>
  </PrimeMenubar>
</template>

<style scoped>
.p-button,
.p-splitbutton {
  margin-bottom: 0.5rem;
}
.header-route {
  margin-left: 10px;
}
</style>
