<script>
export default {};
</script>

<template>
  <div>
    <div
      class="flex flex-row justify-content-center align-items-center bg-pink-800 p-1"
    >
      <p class="text-xs sm:text-base lg:text-lg text-300">
        Join us to github, a conference by Solvve, in Dnipro
      </p>
      <BaseButton
        label="Move"
        icon="pi pi-heart-fill"
        class="p-button-warning text-pink-800 p-button-sm ml-2"
      />
    </div>
    <div class="flex flex-column sm:flex-row align-items-center">
      <div>
        <img alt="home" src="@/assets/home.svg" />
      </div>
      <div class="flex flex-column p-2">
        <p
          class="line-height-2 mb-2 text-center text-sm sm:text-lg lg:text-xl font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel
          ratione aspernatur, minima vero vitae?
        </p>
        <p class="text-justify text-xs sm:text-base lg:text-lg font-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptatem a esse consectetur asperiores sunt ratione similique?
          Libero eius labore illo tempore at, aliquid nihil voluptatum
          necessitatibus blanditiis voluptatem delectus commodi iure tempora
          perspiciatis debitis nam? Amet ab enim voluptates autem libero
          reiciendis, tenetur non dolorum repellat assumenda doloremque magni ea
          eius aut, necessitatibus illo quos omnis! Reprehenderit voluptate
          omnis sunt animi deserunt recusandae esse quis labore debitis eos! Sit
          ullam, maiores accusantium sed similique impedit mollitia maxime animi
          reprehenderit ex nihil recusandae voluptatum in, atque molestiae
          laboriosam rem id dignissimos. Soluta ratione voluptas consectetur
          dolores aliquid repellendus vero fuga est expedita, optio ipsa esse
          recusandae doloribus impedit error quidem quisquam iure voluptatem
          minus temporibus eveniet corrupti magnam molestias. Aspernatur hic
          blanditiis reiciendis error natus consectetur quae consequuntur
          cupiditate ratione velit. Ratione, esse labore, odit eos commodi nihil
          ea a molestiae est, quod aperiam beatae debitis vel delectus nostrum
          dicta.
        </p>
        <div class="flex flex-column justify-content-center align-items-center">
          <input type="text" />
          <input type="text" />
          <BaseButton>Login</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
