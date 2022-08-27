<script>
import PrimeInputText from "primevue/inputText";
import PrimePassword from "primevue/password";
import PrimeCheckbox from "primevue/checkbox";
import PrimeButton from "primevue/button";
import { mapGetters } from "vuex";
//import { toHandlers } from "vue";

export default {
  data() {
    return {
      password: "",
      checked: false,
      login: "",
      mail: "",
    };
  },
  components: {
    PrimeInputText,
    PrimePassword,
    PrimeCheckbox,
    PrimeButton,
  },
  computed: {
    ...mapGetters("userStore", [
      "getUsers",
      "getLoginStatus",
      "isUserMailInSystem",
      "isUserDataValidToAuthorization",
    ]),

    // openDialog() {
    //     return this.$popupStore.mutations["popupStore/openDialog"]
    // }
  },
  methods: {
    logToSystem() {
      this.$store.commit("userStore/login", { name: this.login.valueOf() });
    },
    addUser() {
      this.$store.commit("userStore/registration", {
        userName: this.login.valueOf(),
        email: this.mail.valueOf(),
        password: this.password.valueOf(),
      });
    },
    // switch to registration
    signUp() {
      this.$store.commit("userStore/signUp");
    },
    /// switch to authorization
    signIn() {
      this.$store.commit("userStore/signIn");
    },

    createNewUser() {
      this.confirmUserMail();
      if (this.isUserMailInSystem === true) {
        alert("user with this email already in system");
      } else if (
        this.login.length >= 2 ||
        this.mail.length >= 2 ||
        this.password.length >= 4 ||
        this.checked === true
      ) {
        this.addUser();
      } else {
        alert("need more information");
      }
    },

    confirmUserMail() {
      this.$store.commit("userStore/isMailInSystem", {
        mail: this.mail.valueOf(),
      });
      console.log(this.isUserMailInSystem);
    },
    // проверяем все данные пользователя на возможность входа
    confinrmUserInformationBeforeAuth() {
      this.$store.commit("userStore/isDataValid", {
        mail: this.mail.valueOf(),
        login: this.login.valueOf(),
        password: this.password.valueOf(),
      });
      console.log(this.isUserDataValidToAuthorization);
    },
    loginIntoSystem() {
      this.confinrmUserInformationBeforeAuth();
      if (this.isUserDataValidToAuthorization === true) {
        this.logToSystem();
      } else {
        alert("information in field not valid for auth");
      }

      //console.log(this.getUsers[0].email);
    },
  },
};
</script>

<template>
  <div v-for="user in getUsers" :key="user.Id">
    Id-{{ user.id }}, UserName-{{ user.userName }}, UserMail-{{ user.email }},
    UserPass-{{ user.password }}
  </div>

  <div class="flex flex-column align-items-center justify-content-center p-4">
    <div>
      <h3>On the first step you need to sign in to our system</h3>
      <!-- поле для логина -->
      <span class="p-float-label">
        <PrimeInputText id="username" type="text" v-model="login" />
        <br />
        <small id="login-help">Enter your login</small>
      </span>
      <span class="p-float-label">
        <PrimeInputText id="user-mail" type="text" v-model="mail" />
        <br />
        <small id="login-help">Enter your mail</small>
      </span>

      <!-- // :style="{ marginLeft: '10px', marginTop: '20px' }" -->
      <!-- поле для пароля -->
      <div>
        <PrimePassword v-model="password" toggleMask :feedback="false">
        </PrimePassword>
        <br />
        <small id="password-help">Enter your passwor1d</small>
      </div>

      <div v-if="getLoginStatus">
        <div>
          <PrimeButton
            label="Sign Up"
            class="p-button-secondary"
            @click="signUp()"
          />
          <PrimeButton
            label="Sign In"
            class="p-button-secondary"
            @click="confinrmUserInformationBeforeAuth()"
            :style="{ marginLeft: '40px' }"
          />
        </div>
      </div>

      <div v-else>
        <!-- ЧЕКБОКС И ВАЛИДАДАЦИЯ ПРАВИЛ-->
        <div class="field-checkbox">
          <PrimeCheckbox inputId="binary" v-model="checked" :binary="true" />
          <label for="binary">
            Для подтверждения необходимо ознакомиться с
            <a> Rules</a>
            <PrimeButton label="popUp" class="p-button-secondary" />
          </label>
        </div>
        <div>
          <!-- <PrimeButton label="Create Accaunt" class="p-button-secondary" :style="{ marginTop: '20px' }"
                        @click="addUser()" /> -->
          <PrimeButton
            label="back to auth"
            class="p-button-secondary"
            @click="signIn()"
          />
          <PrimeButton
            label="Create Accaunt"
            class="p-button-secondary"
            @click="createNewUser()"
            :style="{ marginLeft: '50px' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
