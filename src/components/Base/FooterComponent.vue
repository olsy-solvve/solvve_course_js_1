<script>
import PrimeCard from "primevue/card";
// import PrimeListbox from "primevue/listbox";
import routesName from "@/enums/routesName";

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
    docRoute() {
      this.$router.push({ name: routesName.Doc });
    },
  },
  components: {
    PrimeCard,
    // PrimeListbox,
  },
};
</script>

<template>
  <footer>
    <PrimeCard class="surface-500 text-white">
      <template #title>
        <h4 class="flex align-items-center justify-content-center">
          Questions?
        </h4>
      </template>
      <template #content>
        <div class="col-12">
          <div class="col-12 sm:col-4">
            <p>
              Drop us a line at
              <span class="underline cursor-pointer">hello@superpuper.com</span>
            </p>
            <ul>
              <a
                v-for="developer in developers"
                :key="developer.name"
                :href="developer.link"
              >
                <li><i class="pi pi-github"></i> {{ developer.name }}</li>
              </a>
            </ul>
          </div>
          <div class="col-12 sm:col-4"></div>
          <div class="col-12 sm:col-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque nulla, dicta similique laboriosam expedita labore sint
              repudiandae pariatur illum deleniti fugit officia exercitationem
              nobis cupiditate reprehenderit? Expedita illo veniam voluptatibus
              aperiam illum! Perspiciatis quisquam hic modi similique, dolore
              dicta exercitationem voluptatem consequuntur dolorum quasi earum
              iste, velit rerum pariatur nemo?
            </p>
          </div>
        </div>
        <div class="col-12">
          <div class="copyright">
            <div class="flex justify-content-center gap-3">
              <a href="#" class="underline cursor-pointer">Privacy Policy</a>
              <a href="#" class="underline cursor-pointer">Terms of Use</a>
              <a href="#" class="underline cursor-pointer"
                >&copy;2022 SUPERPUPER</a
              >
            </div>
            <p>Copyright &copy; {{ year }}</p>
            <!-- <AboutComponent
              label="About"
              class="underline cursor-pointer"
            /> -->
          </div>
        </div>
      </template>
    </PrimeCard>
  </footer>
</template>

<style>
.copyright {
  text-align: center;
}
</style>
