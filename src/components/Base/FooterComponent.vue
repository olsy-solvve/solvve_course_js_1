<script>
import routesName from "@/enums/routesName";

export default {
  name: "FooterComponent",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    aboutRoute() {
      this.$router.push({ name: routesName.ABOUT });
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="flex flex-column card-container green-container">
      <div
        class="flex align-items-center justify-content-center h-4rem bg-green-500 font-bold text-white"
      >
        Questions?
      </div>
      <div
        class="flex align-items-center justify-content-center h-4rem bg-green-500 text-white"
      >
        <p class="flex justify-content-center gap-1">
          Drop us a line at
          <span class="underline cursor-pointer">hello@superpuper.com</span>
        </p>
      </div>
      <div
        class="flex align-items-center justify-content-center h-4rem bg-teal-500 text-white"
      >
        <div class="flex justify-content-center gap-2">
          <a href="https://github.com/Krian-md"
            ><i class="pi pi-github">Denys</i></a
          >
          <a href="https://github.com/keysiu"
            ><i class="pi pi-github">Anastasia</i></a
          >
          <a href="https://github.com/sy5989pro"
            ><i class="pi pi-github">Serhii_Y</i></a
          >
          <a href="https://github.com/polokop"
            ><i class="pi pi-github">Taras</i></a
          >
          <a href="https://github.com/Serioagka"
            ><i class="pi pi-github">Serhii_K</i></a
          >
        </div>
      </div>
      <div
        class="flex align-items-center justify-content-center h-4rem bg-green-700 font-bold text-white"
      >
        <div class="flex justify-content-center gap-3">
          <a href="#" class="underline cursor-pointer">Privacy Policy</a>
          <a href="#" class="underline cursor-pointer">Terms of Use</a>
          <a href="#" class="underline cursor-pointer">&copy;2022 SUPERPUPER</a>
        </div>
      </div>
      <div
        class="flex align-items-center justify-content-center h-4rem bg-bluegray-400 text-white"
      >
        <div class="copyright">
          <p>Copyright &copy; {{ year }}</p>
          <AboutComponent
            label="About"
            class="underline cursor-pointer"
            @click="aboutRoute"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.copyright {
  text-align: center;
}
</style>
