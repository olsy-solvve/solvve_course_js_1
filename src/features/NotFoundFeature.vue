<script></script>

<template>
  <!-- https://www.searchenginejournal.com/404-page-examples/211154/#:~:text=A%20404%20page%20is%20a,find%20the%20information%20they%20need. -->
  <div class="error">
    <h1>Whoops!</h1>
    <h4>404 Page Not Found</h4>
    <img src="@/assets/home.svg" alt="error" height="200"/>
    <h4>Looks like this page went on vacation.</h4>
    <p>
      Try our <a href="/home">homepage</a>homepage or
      <a href="/doc">doc</a> instead
    </p>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
