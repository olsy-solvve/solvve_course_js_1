<script></script>

<template>
  <div>
    <h2>SUPER PUPER To-Do List App by Enthusiasts Developers</h2>
    <h3>Version 1.0.0 – Created to Organize Your Work & Life</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </p>
    <div class="route-wrapper">
      <router-link to="/"
        >Go Back<i class="pi pi-arrow-right" style="font-size: 0.8rem"></i
      ></router-link>
    </div>
  </div>
</template>

<style>
p {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-indent: 1.3rem;
}

.route-wrapper {
  padding-bottom: 1rem;
  padding-left: 1rem;
}

a {
  cursor: pointer;
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:focus {
  border-bottom: 1px solid;
  background: #bae498;
}

a:hover {
  border-bottom: 1px solid;
  background: #cdfeaa;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}

h2 {
  padding-top: 1.5rem;
}

h2,
h3 {
  padding-bottom: 1.5rem;
  text-align: center;
}
</style>
