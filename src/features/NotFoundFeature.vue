<script>
import MainComponent from "@/components/Base/MainComponent.vue";

export default {
  components: {
    MainComponent,
  },
};
</script>

<template>
  <MainComponent>
    <!-- https://www.searchenginejournal.com/404-page-examples/211154/#:~:text=A%20404%20page%20is%20a,find%20the%20information%20they%20need. -->
    <div class="col-12 p-3 h-auto">
      <div class="col-12">
        <p
          class="text-center line-height-1 text-2xl sm:text-3xl lg:text-4xl font-bold"
        >
          Whoops!
        </p>
      </div>
      <div class="col-12">
        <p class="text-center text-xs sm:text-base lg:text-lg font-italic">
          404 Page Not Found
        </p>
      </div>
      <div class="col-12 col-offset-0 sm:col-offset-2">
        <img
          src="@/assets/errorFeature.png"
          alt="error"
          class="w-full sm:w-8 p-2"
        />
      </div>
      <div class="col-12">
        <p class="text-center text-text-base sm:text-xl lg:text-2xl font-bold">
          Looks like this page went on vacation.
        </p>
      </div>
      <div class="col-12">
        <p class="text-center text-xs sm:text-base lg:text-lg">
          Try our <a href="/">homepage</a> homepage or
          <a href="/doc">doc</a> instead
        </p>
      </div>
    </div>
  </MainComponent>
</template>

<style></style>
