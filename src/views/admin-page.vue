<template>
  <section class="dashboard-container" v-if="users">
    <section class="dashboard-container-users flex">
      <el-table
        :data="
          users.filter(
            (user) =>
              !search ||
              user.username.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column label="username" prop="username"> </el-table-column>
        <el-table-column label="fullname" prop="fullname"
          >{userReviews}
        </el-table-column>
        <el-table-column label="userReviews" prop="userReviews">
        </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="updateUser(scope.row)"
              >update</el-button
            >
            <el-button size="mini" type="danger" @click="removeUser(scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <user-edit
        v-if="user"
        :user="user"
        :userReviews="userReviews"
        @closeModal="closeModal"
        @updateUser="updateEditUser"
      />
    </section>
    <span>User Review</span>
    <el-table v-if="userReviews" :data="userReviews" style="width: 100%">
      <el-table-column prop="txt" label="txt" width="180"> </el-table-column>
      <el-table-column prop="aboutToy.name" label="aboutToy.name" width="180">
      </el-table-column>
      <el-table-column prop="byUser.fullname" label="byUser.fullname">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import userEdit from "../components/user-edit.vue";
export default {
  data() {
    return {
      users: [],
      user: "",
      search: "",
      userReviews: "",
    };
  },
  created() {
    this.setUsers();
    this.getUserReviews();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    closeModal() {
      this.user = "";
    },
    async getUserReviews() {
      const currUser = await this.getCurrUser;
      const userReviews = await this.$store.dispatch({
        type: "loadReviews",
        filterBy: { userId: currUser._id },
      });
      this.userReviews = userReviews;
      console.log(userReviews);
    },
    updateEditUser(user) {
      this.$store.dispatch({
        type: "updateUser",
        user: user,
      });
      this.user = "";
    },
    async setUsers() {
      const users = await this.$store.dispatch({ type: "loadUsers" });
      this.users = users;
    },
    removeUser(user) {
      this.$store.dispatch({
        type: "removeUser",
        userId: user._id,
      });
    },
    updateUser(user) {
      this.user = user;
    },
  },
  computed: {
    getCurrUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: {
    userEdit,
  },
};
</script>

<style>
</style>