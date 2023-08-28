<template>
  <div
    id="Login-Page"
    class="flex justify-center items-center w-full h-full bg-neutral-300"
  >
    <div
      id="login-box"
      class="flex justify-start flex-col w-1/5 min-w-[380px] h-[50%] min-h-[532px] bg-white pt-5 pb-5 pl-6 pr-6 rounded-xl border shadow-md"
    >
      <div
        id="LogoContainer"
        class="flex justify-center items-center w-full h-1/5"
      ></div>
      <div id="text-divider" class="flex flex-col justify-center gap-6">
        <div id="login-text" class="flex justify-center text-2xl">
          Log in to your account
        </div>
        <div
          id="divider-container"
          class="flex flex-col justify-center w-full h-[1px] bg-stone-200"
        ></div>
      </div>
      <div
        id="email-container"
        class="flex flex-col justify-center w-full h-1/5 gap-1"
      >
        <div id="email-text" class="">Email</div>
        <input
          id="email-input-box"
          v-model="email"
          type="email"
          name="email-input"
          class="border border-gray-300 shadow-sm rounded-lg"
          placeholder="Enter your Email"
        />
      </div>
      <div
        id="password-container"
        class="flex flex-col justify-center w-full h-1/5 gap-1"
      >
        <div id="password-text" class="">Password</div>
        <input
          id="password-input-box"
          v-model="password"
          type="password"
          name="password-input"
          class="border border-gray-300 shadow-sm rounded-lg"
          placeholder="**********"
        />
      </div>
      <div
        id="login-signup"
        class="flex flex-col justify-center h-1/4 w-full gap-6"
      >
        <button
          id="login-container"
          class="flex justify-center items-center w-full h-11 bg-sagered border border-sagered shadow-sm rounded-lg text-white"
        >
          <button id="login-button" class="" @click="functest">Login</button>
        </button>
        <div id="sign-up-option" class="flex justify-center items-center">
          <div
            id="sign-up-text"
            class="flex justify-center text-xm text-slate-400"
          >
            Don't have an account?
          </div>
          <NuxtLink to="/signup">
            <button id="sign-up-button" class="flex justify-center text-xm">
              &nbsp; Sign up
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCheck",
  props: {},
  methods: {
    functest() {
      const email = document.getElementById("email-input-box").value;
      const password = document.getElementById("password-input-box").value;

      this.$axios
        .$post(`${this.$config.apiVersion}/test-users/verify`, {
          Email: email,
          Password: password,
        })
        .then(function (response) {
          alert(response);
        });
    },
  },
};
</script>

<style scoped></style>
