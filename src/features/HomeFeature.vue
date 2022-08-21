<script>
export default {};
</script>

<template>
  <div class="home">
    <div class="home-top">
      <p class="home-top-text">
        Join us to github, a conference by Solvve, in Dnipro
      </p>
      <BaseButton
        label="Move"
        icon="pi pi-heart-fill"
        class="p- p-button-sm home-top-button"
      />
    </div>
    <div class="home-bottom">
      <div class="home-bottom-image">
        <img alt="home" src="@/assets/home.svg" />
      </div>
      <div class="home-bottom-content">
        <h1 class="home-bottom-content-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel
          ratione aspernatur, minima vero vitae?
        </h1>
        <p class="home-bottom-content-description">
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
        <div class="home-bottom-content-form">
          <input type="text" />
          <input type="text" />
          <BaseButton>Login</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--pink-800);
  padding: 10px;

  .home-top-text {
    color: lightgray;
    font-size: 18px;
  }
  .home-top-button {
    background-color: var(--orange-400);
    margin-left: 10px;
  }
}

.home-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  .home-bottom-image {
  }

  .home-bottom-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    .home-bottom-content-title {
      line-height: 1.25;
      margin-bottom: 1rem;
      text-align: center;
    }
    .home-bottom-content-description {
      text-align: justify;
    }
    .home-bottom-content-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
