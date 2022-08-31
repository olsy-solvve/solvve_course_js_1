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
    <div class="h-screen">
      <h2 class="py-4 text-center">SUPER PUPER To-Do List App by Enthusiasts Developers</h2>
      <h3 class="pb-4 text-center">Version 1.0.0 – Created to Organize Your Work & Life</h3>
      <p class="px-3 pb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p class="px-3 pb-3">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div class="pl-3">
        <router-link to="/"
          >Go Back<i class="text-sm pi pi-arrow-right pl-1"></i
        ></router-link>
      </div>
    </div>
  </MainComponent>
</template>

<style lang="scss" scoped>

$a-tags: 'a, a:active, a:hover, a:visited';
$a-tags-hover: 'a:active, a:hover';

#{$a-tags} {
  color: #ff0000;
  text-decoration: none;
}
#{$a-tags-hover} {
  color: #0000ff;
}

@mixin linx ($link, $visit, $hover, $active) {
  a {
    color: $link;
    &:visited {
      color: $visit;
    }
    &:hover {
      color: $hover;   
    }
    &:active {
      color: $active;
    }
  }
}

</style>
