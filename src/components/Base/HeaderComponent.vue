<script>
import PrimeMenubar from "primevue/menubar";
import PrimeInputText from "primevue/inputText";
import PrimeOverlayPanel from "primevue/overlaypanel";

import routesName from "@/enums/routesName";

export default {
  name: "HeaderComponent",
  data() {
    return {
      currentUser: null,
      currentWidth: window.innerWidth,
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
      this.currentWidth = window.innerWidth;
    },
    toggleSourchPanel(event) {
      this.$refs.op.toggle(event);
    },
  },
  computed: {
    smallSize() {
      return this.currentWidth <= 1024 ? true : false;
    },
    middleSize() {
      return this.currentWidth > 1024 && this.currentWidth <= 1440
        ? true
        : false;
    },
    largeSize() {
      return this.currentWidth > 1440 ? true : false;
    },
    userConfirmation() {
      return this.$store.getters["userStore/getUserConfirmation"];
    },
    getUsers() {
      return this.$store.getters["userStore/getUsers"];
    },
    getUser() {
      return this.$store.getters["userStore/getUser"];
    },
  },
  components: {
    PrimeMenubar,
    PrimeInputText,
    PrimeOverlayPanel,
  },
  mounted() {
    window.addEventListener("resize", this.updateCurrentWidth);
  },
};
</script>

<template>
  <header>
    <div class="header-top">
      <div class="header-top-logo">
        <img
          alt="logo"
          src="@/assets/logoTodo.svg"
          class="header-top-logo-image"
          @click="homeRoute"
        />
        <p class="header-top-logo-text">SUPER PUPER</p>
      </div>
      <div class="header-elements">
        <div class="col-8 hidden md:inline-flex">
          <div class="p-inputgroup">
            <PrimeInputText
              placeholder="Keyword"
              :class="{
                'p-inputtext-sm': smallSize,
                'p-input': middleSize,
                'p-inputtext-lg': largeSize,
              }"
              class="input-sourch"
            />
            <BaseButton
              icon="pi pi-search"
              :class="{
                'p-button-sm': smallSize,
                'p-button': middleSize,
                'p-button-lg': largeSize,
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
              'p-button-sm': smallSize,
              'p-button': middleSize,
              'p-button-lg': largeSize,
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
              'p-button-sm': smallSize,
              'p-button': middleSize,
              'p-button-lg': largeSize,
            }"
            class="p-button-success p-button-rounded"
            @click="login"
          />
        </div>
      </div>
    </div>
    <div class="header-navigation">
      <PrimeMenubar :model="routes">
        <template #start>
          <img
            alt="logo"
            src="@/assets/headerNavigation.svg"
            class="header-navigation-panel-image"
          />
        </template>
        <template #end>
          <BaseButton
            icon="pi pi-search"
            class="p-button-success p-button-sm p-button-rounded sm:hidden"
            aria:haspopup="true"
            @click="toggleSourchPanel"
          />
          <PrimeOverlayPanel
            ref="op"
            appendTo="body"
            :breakpoints="{ '960px': '100vw' }"
          >
            <PrimeInputText
              placeholder="Keyword"
              class="p-inputtext-sm input-sourch"
            />
          </PrimeOverlayPanel>
        </template>
      </PrimeMenubar>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$backgroundElement: var(--green-100);
$logoTextColor: var(--red-700);

header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background-color: $header-footer-background;
}

.header-top {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;

  .header-top-logo {
    @include double-content;
    justify-content: start;

    .header-top-logo-image {
      height: 60px;

      &:hover {
        cursor: pointer;
      }
    }
    .header-top-logo-text {
      margin-left: 1rem;
      color: $logoTextColor;
      font-family: $app-text-logo;
      font-size: 40px;
    }
  }

  .header-elements {
    @include double-content;
    justify-content: end;
  }
}

.p-menubar {
  background-color: $backgroundElement;
}
.p-menuitem-active {
}

.header-navigation-panel-image {
  height: 40px;
}
.input-sourch {
  border-color: var(--green-500);
  color: var(--green-800);
  background-color: $backgroundElement;
  font-style: italic;
}

/* Portrait tablets and medium desktops */
@media (min-width: 768px) and (max-width: 1024px) {
  .header-top {
    .header-top-logo {
      .header-top-logo-image {
        height: 50px;
      }
      .header-top-logo-text {
        margin-left: 0.25rem;
        font-size: 28px;
      }
    }
  }

  .header-navigation-panel-image {
    height: 40px;
  }
}
/* Landscape phones and smaller */
@media (max-width: 480px) {
  .header-top {
    .header-top-logo {
      .header-top-logo-image {
        height: 40px;
      }
      .header-top-logo-text {
        margin-left: 0.25rem;
        font-size: 24px;
      }
    }
  }

  .header-navigation-panel-image {
    height: 30px;
  }
}
</style>
