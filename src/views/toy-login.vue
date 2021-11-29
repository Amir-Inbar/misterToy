
<template>
  <section class="login-container flex">
    <h1>
      Welcome <span v-if="user">{{ this.user.fullname }}!</span>
    </h1>
    <form @submit.prevent="logIn" class="login-form flex">
      <span>Write your username</span>
      <el-input placeholder="Your user name" v-model="user.username" clearable>
      </el-input>
      <span>Write your fullname</span>
      <el-input
        placeholder="Please full name"
        v-model="user.fullname"
        clearable
      >
      </el-input>
      <span>Write your password</span>
      <el-input
        type="password"
        placeholder="Your password"
        v-model="user.password"
        clearable
      >
      </el-input>
      <el-button size="large" @click="logIn">Login</el-button>
    </form>
    <div class="login-btns">
      <el-button size="large" @click="signUp">signup</el-button>
      <el-button size="large" @click="logOut">logOut</el-button>
    </div>
  </section>
</template>

<script>
import { userService } from "../services/user.service";

export default {
  props: {},
  components: {},
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = userService.getLoggedinUser() || userService.getEmptyUser();
  },
  updated() {},
  destroyed() {},
  methods: {
    async logIn() {
      const userLog = await this.$store.dispatch({
        type: "setLogin",
        user: this.user,
      });
      if (userLog) {
        console.log(this.getUser);
        this.$router.push("/");
      } else {
        console.log("user not found");
      }
    },
    async signUp() {
      const userLog = await this.$store.dispatch({
        type: "setSignIn",
        user: this.user,
      });
      if (userLog) {
        this.$router.push("/");
      } else {
        console.log("user not found");
      }
    },
    async logOut() {
      const userLog = await this.$store.dispatch({
        type: "setLogOut",
      });
      console.log(userLog);
      if (userLog) {
        console.log("logOut success");
        this.user = userService.getEmptyUser();
      }
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getCurrUser;
    },
  },
  watch: {},
};
</script>