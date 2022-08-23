<script></script>

<template>
  <!-- https://www.searchenginejournal.com/404-page-examples/211154/#:~:text=A%20404%20page%20is%20a,find%20the%20information%20they%20need. -->
  <div class="flex flex-column justify-content-center align-items-center">
    <p
      class="line-height-1 mt-3 text-center text-sm sm:text-lg lg:text-xl font-bold"
    >
      Whoops!
    </p>
    <p class="text-justify mt-1 text-xs sm:text-base lg:text-lg font-italic">
      404 Page Not Found
    </p>
    <img src="@/assets/home.svg" alt="error" class="w-full sm:w-6 mt-2" />
    <p class="text-justify mt-1 text-sm sm:text-base lg:text-lg font-bold">
      Looks like this page went on vacation.
    </p>
    <p class="text-justify text-xs sm:text-base lg:text-lg">
      Try our <a href="/home">homepage</a> homepage or
      <a href="/doc">doc</a> instead
    </p>
  </div>
</template>

<style scoped></style>
