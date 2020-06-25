<template>
  <div class="absolute w-full h-screen bg-darkShade">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-1/2 mx-auto border-t-4 border-red rounded shadow-lg">
        <div class="w-full bg-white px-15 py-8">
          <div class="flex">
            <!--  -->
            <IconWrapper :icon="logoIcon" styleWrap="w-10 text-red" />
            <div class="flex-col-center px-2 font-bold text-4xl text-black">
              <span>ITS</span>
            </div>
          </div>
          <div class="my-4">
            <label :for="username.nombre" class="clearfix">
              {{
              username.displayName
              }}
            </label>
            <input
              :type="username.type"
              :class="inputStyle"
              :id="username.id"
              :placeholder="username.placeholder"
              v-model="username.value"
              @input="loginError = false"
            />
          </div>

          <div class="my-4">
            <label :for="password.nombre" class="clearfix">
              {{
              password.displayName
              }}
            </label>
            <input
              :type="password.type"
              :class="inputStyle"
              :id="password.id"
              :placeholder="password.placeholder"
              v-model="password.value"
              @keyup.enter="eventLog"
              @input="loginError = false"
            />
          </div>
          <div class="h-4">
            <span
              v-if="loginError"
              class="text-sm text-red"
            >There is an error in the username or the password</span>
          </div>
          <div class="mt-4">
            <button
              class="w-32 h-8 bg-red text-white rounded-lg hover:bg-red-title transition-duration-250 focus:outline-none"
              @click.prevent="eventLog"
            >Sign in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { logoIcon } from "~/assets/svg/icons.js";
export default {
  name: "Login",
  created() {
    this.clearAuth();
  },
  data() {
    return {
      username: {
        name: "username",
        type: "username",
        displayName: "Username",
        placeholder: "Username",
        id: "username",
        value: ""
      },
      password: {
        name: "password",
        type: "password",
        displayName: "Password",
        placeholder: "Password",
        id: "password",
        value: ""
      },
      logoIcon,
      loginError: false
    };
  },
  computed: {
    inputStyle() {
      return "mx-auto form-control h-8 w-full md:w-2/3 mt-2 py-2 px-4 border border-black rounded text-sm  focus:border-darkAccent focus:outline-none";
    }
  },

  methods: {
    ...mapActions({
      login: "auth/login"
    }),
    ...mapMutations({
      clearAuth: "auth/clearAuth"
    }),

    eventLog() {
      let username = this.username.value,
        password = this.password.value;
      if (username && password) {
        this.login({ username, password })
          .then(res => {
            res.isAdmin
              ? this.$router.push({ name: "entity" })
              : this.$router.push({ name: "identity" });
          })
          .catch(error => {
            this.loginError = true;
          });
      }
    }
  }
};
</script>