<template>
  <div class="container home">
    <span>User Review</span>
    <el-table v-if="reviews" :data="reviews" style="width: 100%">
      <el-table-column prop="txt" label="txt" width="180"> </el-table-column>
      <el-table-column prop="aboutToy.name" label="aboutToy.name" width="180">
      </el-table-column>
      <el-table-column prop="byUser.fullname" label="byUser.fullname">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      totalReviews: "",
    };
  },
  computed: {
    reviews() {
      return this.$store.getters.reviews;
    },
    users() {
      return this.$store.getters.users;
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  created() {
    this.loadReviews();
  },
  methods: {
    async loadReviews() {
      const reviews = await this.$store.dispatch({
        type: "loadReviews",
        filterBy: { id: "" },
      });
      this.totalReviews = reviews;
      console.log(reviews);
    },
  },
};
</script>
