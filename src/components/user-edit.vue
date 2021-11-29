<template>
  <section class="user-edit-container flex">
    <el-button type="info" round @click="$emit('closeModal')">X</el-button>
    <span>User fullName:</span
    ><el-input
      placeholder="Please input"
      v-model="userToEdit.fullname"
      clearable
    >
    </el-input>
    <span>User nickName:</span
    ><el-input
      placeholder="Please input"
      v-model="userToEdit.username"
      clearable
    >
    </el-input>
    <span>User created Date:</span
    ><el-date-picker
      v-model="userToEdit.createdAt"
      type="date"
      placeholder="Pick a day"
    >
    </el-date-picker>
    <el-button type="success" plain @click="updateUser">Update</el-button>
  </section>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      userToEdit: {
        fullname: this.user.fullname,
        isAdmin: this.user.isAdmin,
        isHappy: this.user.isHappy,
        createdAt: this.user.createdAt,
        username: this.user.username,
        _id: this.user._id,
      },
    };
  },
  methods: {
    updateUser() {
      this.$emit("updateUser", this.userToEdit);
    },
  },
  computed: {},
  components: {},
};
</script>

<style>
</style>