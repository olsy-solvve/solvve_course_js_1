<script>
import PrimeCard from "primevue/card";
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
  },
};
</script>

<template>
  <footer>
    <PrimeCard class="surface-500 text-100">
      <template #title>
        <h4 class="flex align-items-center justify-content-center">
          Questions?
        </h4>
      </template>
      <template #content>
        <div class="grid col-12 m-0 p-0">
          <div class="col-12 sm:col-4">
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque nulla, dicta similique laboriosam expedita labore sint
              repudiandae pariatur illum deleniti fugit officia exercitationem
              nobis cupiditate reprehenderit? Expedita illo veniam voluptatibus
              aperiam illum! Perspiciatis quisquam hic modi similique, dolore
              dicta exercitationem voluptatem consequuntur dolorum quasi earum
              iste, velit rerum pariatur nemo?
            </p>
          </div>
          <div class="col-12 sm:col-4">
            <p class="text-center">
              Drop us a line at
              <span class="underline cursor-pointer">hello@superpuper.com</span>
            </p>
            <ul class="list-none col-offset-4 lg:col-offset-5">
              <a
                v-for="developer in developers"
                :key="developer.name"
                :href="developer.link"
                class="no-underline text-green-700 cursor-pointer"
              >
                <li><i class="pi pi-github"></i> {{ developer.name }}</li>
              </a>
            </ul>
          </div>
          <div class="col-12 sm:col-4">
            <p class="text-justify">
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
          <div class="text-center">
            <div class="flex justify-content-center gap-3">
              <a href="#" class="no-underline text-green-700 cursor-pointer"
                >Privacy Policy</a
              >
              <a href="#" class="no-underline text-green-700 cursor-pointer"
                >Terms of Use</a
              >
              <a href="#" class="no-underline text-green-700 cursor-pointer"
                >&copy;2022 SUPERPUPER</a
              >
            </div>
            <p>Copyright &copy; {{ year }}</p>
          </div>
        </div>
      </template>
    </PrimeCard>
  </footer>
</template>

<style lang="scss"></style>
