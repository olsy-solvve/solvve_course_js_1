<script>
import MainComponent from "@/components/Base/MainComponent.vue";
import PrimeInputText from "primevue/inputText";
import PrimePassword from "primevue/password";
import PrimeCheckbox from "primevue/checkbox";
import { mapActions, mapGetters, mapMutations } from "vuex";

import popupName from "@/enums/popupName.js";
import routesName from "@/enums/routesName.js";

export default {
  data() {
    return {
      username: "",
      isValidUsername: false,
      email: "",
      isValidEmail: false,
      password: "",
      isValidPassword: false,
      checked: false,
      isLoginPage: false,
    };
  },
  watch: {
    username(value) {
      if (value !== "") {
        this.isValidUsername = true;
        this.username = value.trim();
      } else {
        this.isValidUsername = false;
      }
    },
    email(value) {
      if (value !== "") {
        this.isValidEmail = true;
        this.email = value.trim();
      } else {
        this.isValidEmail = false;
      }
    },
    password(value) {
      if (value !== "") {
        this.isValidPassword = true;
        this.password = value.trim();
      } else {
        this.isValidPassword = false;
      }
    },
  },
  computed: {
    ...mapGetters("userStore", ["isEmailExist", "isUserValid"]),
  },
  methods: {
    ...mapActions("userStore", ["login"]),
    ...mapMutations("userStore", ["registration"]),
    ...mapMutations("popupStore", ["openDialog"]),
    switching() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.checked = false;
      this.isLoginPage = !this.isLoginPage;
    },
    registrationUser() {
      if (this.isEmailExist(this.email)) {
        alert("user with this email already in system");
      } else if (!this.checked) {
        alert("Read our privacy policy");
      } else if (
        this.isValidUsername &&
        this.isValidEmail &&
        this.isValidPassword
      ) {
        this.registration({
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.switching();
      }
    },
    loginUser() {
      const user = {
        email: this.email,
        password: this.password,
      };
      if (this.isUserValid(user) && this.isValidEmail && this.isValidPassword) {
        this.login(user);
        this.$router.push({ name: routesName.HOME });
      } else {
        alert("Information in field not valid for auth");
      }
    },
    openPrivacyPolicy() {
      this.openDialog({
        name: popupName.PRIVACY_POLICY_POPUP,
        props: [],
      });
    },
  },
  components: {
    MainComponent,
    PrimeInputText,
    PrimePassword,
    PrimeCheckbox,
  },
};
</script>

<template>
  <MainComponent>
    <div
      class="flex flex-column align-items-center justify-content-center p-4 h-screen"
    >
      <div>
        <div v-if="isLoginPage" class="flex flex-column mt-2">
          <label for="username">Username </label>
          <PrimeInputText
            v-model="username"
            id="username"
            name="username"
            type="text"
            aria-describedby="username-help"
            :class="{ 'p-invalid': !isValidUsername }"
          />
          <small v-show="!isValidUsername" id="username-help" class="p-error"
            >Username is empty.</small
          >
        </div>
        <div class="flex flex-column mt-2">
          <label for="email">Email </label>
          <PrimeInputText
            v-model="email"
            id="email"
            name="email"
            type="text"
            aria-describedby="email-help"
            :class="{ 'p-invalid': !isValidEmail }"
          />
          <small v-show="!isValidEmail" id="email-help" class="p-error"
            >Email is empty.</small
          >
        </div>
        <div class="flex flex-column mt-2">
          <label for="email">Password </label>
          <PrimePassword
            v-model="password"
            toggleMask
            :feedback="false"
            id="password"
            name="password"
            type="text"
            aria-describedby="password-help"
            :class="{ 'p-invalid': !isValidPassword }"
          />
          <small v-show="!isValidPassword" id="password-help" class="p-error"
            >Password is empty.</small
          >
        </div>
      </div>

      <div v-if="!isLoginPage" class="mt-3">
        <BaseButton
          label="Sign Up"
          class="p-button-secondary"
          @click="switching"
        />
        <BaseButton
          label="Sign In"
          class="p-button-secondary ml-5"
          @click="loginUser"
        />
      </div>
      <div v-else class="mt-3">
        <div class="flex align-items-center field-checkbox">
          <PrimeCheckbox
            inputId="privacyPolicy"
            v-model="checked"
            :binary="true"
          />
          <label for="privacyPolicy"> To confirm, read the </label>
          <span
            class="text-blue-600 uppercase cursor-pointer ml-1"
            @click="openPrivacyPolicy"
            >Privacy Policy</span
          >
        </div>
        <div>
          <BaseButton
            label="back to auth"
            class="p-button-secondary"
            @click="switching"
          />
          <BaseButton
            label="Create Accaunt"
            class="p-button-secondary ml-5"
            @click="registrationUser"
          />
        </div>
      </div>
    </div>
  </MainComponent>
</template>

<style></style>
