<script setup></script>

<template>
  <main class="h-auto">
    <slot></slot>
  </main>
</template>

<style lang="scss">
main {
  background-color: $main-background;
  color: $app-text-color;
}

@media screen and (min-width: 1440px) {
  main {
    max-width: 1648px;
    margin: 0 auto;
  }
}
</style>
