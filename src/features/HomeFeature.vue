<script>
import popupName from "@/enums/popupName.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      linkToGitHub: "https://github.com/olsy-solvve/solvve_course_js_1.git",
    };
  },
  methods: {
    ...mapMutations("popupStore", ["openDialog"]),
    openTodoCreatePopup() {
      this.openDialog({
        name: popupName.TODO_CREATE_POPUP,
        props: [],
      });
    },
    openTodoTypeCreatePopup() {
      this.openDialog({
        name: popupName.TODO_TYPE_CREATE_POPUP,
        props: [],
      })
    }
  },
};
</script>

<template>
  <div class="grid col-12 m-0 p-0">
    <div class="col-12 bg-pink-800">
      <div class="flex flex-row justify-content-center align-items-center">
        <p class="text-xs sm:text-base lg:text-lg text-300">
          Join us to github, a conference by Solvve, in Dnipro
        </p>
        <a
          href="https://github.com/olsy-solvve/solvve_course_js_1"
          class="no-underline"
        >
          <BaseButton
            label="Move"
            icon="pi pi-heart-fill"
            class="p-button-warning text-pink-800 p-button-sm ml-2"
          />
        </a>
      </div>
    </div>
    <div class="col-12 lg:col-6 p-1 sm:p-3">
      <div class="text-center col-12 md:col-10 col-offset-0 md:col-offset-2">
        <h3>
          Sure, we`ve been around the block. We probably worked with the people
          who built it.
        </h3>
        <p class="text-justify text-xs sm:text-base lg:text-lg">
          Dui ut ornare lectus sit. Tincidunt lobortis feugiat vivamus at augue
          eget arcu. Vulputate mi sit amet mauris commodo quis imperdiet massa
          tincidunt. Sodales neque sodales ut etiam sit amet nisl. Blandit
          libero volutpat sed cras ornare arcu dui vivamus arcu. Luctus
          venenatis lectus magna fringilla urna porttitor rhoncus. Vitae
          suscipit tellus mauris a.
        </p>
      </div>
      <div class="col-12 md:col-10">
        <img alt="home" src="@/assets/home_1.svg" />
      </div>
    </div>
    <div class="col-12 lg:col-6 p-1 sm:p-3">
      <div class="col-12 md:col-10 col-offset-0 md:col-offset-2">
        <img alt="home" src="@/assets/home_2.jpeg" />
      </div>
      <div class="col-12 md:col-10">
        <h3 class="text-center">
          Earning your business with experience, expertise, and trust.
        </h3>
        <ul>
          <li>Component Production Equipment</li>
          <li>Wall Panel Framing and Sheathing Equipment</li>
          <li>Linear Saws</li>
          <li>Saws-Component, Radial Arm, Automated Measuring Systems</li>
          <li>Material Handling Systems</li>
          <li>Roll-Off Truss Trailers</li>
          <li>Waste Reduction Equipment</li>
          <li>Replacement Production Surfaces</li>
          <li>Plant Layout Experts/Production Consultants</li>
        </ul>
      </div>
    </div>
    <div class="col-12 p-2 sm:p-3">
      <h3 class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
        libero, non maxime eius quaerat assumenda. Id tenetur quod est, rerum
        reprehenderit omnis asperiores quasi recusandae hic corrupti voluptatum,
        commodi quae!
      </h3>
      <p class="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
        temporibus nostrum, reprehenderit error vitae reiciendis aliquam
        voluptatibus eos perspiciatis iusto quos neque hic deserunt dignissimos
        officiis veritatis obcaecati omnis numquam veniam eius minus quia.
        Inventore libero dolorem unde aliquid id quos totam voluptatibus
        mollitia sunt sit ad architecto accusantium natus, exercitationem
        recusandae ipsam laborum, aspernatur corporis, a molestiae laudantium
        impedit hic? Culpa ratione expedita corrupti soluta iusto eius accusamus
        adipisci ad distinctio nulla error, aliquid dignissimos deserunt
        consequatur odio? Unde a fugiat vero omnis assumenda quia veritatis,
        minus incidunt asperiores veniam! Atque tenetur nisi tempora doloremque
        voluptatem recusandae obcaecati corporis, modi, beatae quisquam,
        voluptatibus iusto? Eius labore aliquid quisquam voluptatum itaque,
        quasi saepe voluptatem, nam cum iure facilis nisi alias cumque
        repudiandae dolores harum pariatur dolorum iste laboriosam. Veritatis
        quaerat nam culpa. Enim rem, iste fugiat nesciunt distinctio corrupti
        rerum at ullam ipsa officiis ratione mollitia sit ipsam labore animi.
      </p>
    </div>
  </div>
</template>

<style></style>
