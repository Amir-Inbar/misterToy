
<template>
  <section class="toy-details flex" v-if="currToy">
    <section class="toy-details-main flex">
      <div class="toy-main-details-left flex">
        <div><span>Toy Name:</span>{{ currToy.name }}</div>
        <div><span>Toy Price:</span> ${{ currToy.price }}</div>
        <div><span>Toy Labels:</span>{{ labelsToShow }}</div>
        <div><span>Toy inStock:</span>{{ currToy.inStock }}</div>
        <div><span>Toy created Date:</span>{{ DatelsToShow }}</div>
        <div>
          <span>Reviews:</span
          ><el-rate v-model="value" disabled text-color="#ff9900"></el-rate>
        </div>
        <el-button type="primary" @click="goBack">Back</el-button>
      </div>
      <div class="toy-main-details-right flex">
        <img :src="require(`@/img/${currToy.url}.jpg`)" alt="" />
      </div>
    </section>
    <section class="review-container flex">
      <h1>Add Review</h1>
      <form
        class="toy-details-review flex"
        v-if="loggedInUser"
        @submit.prevent="addReview()"
      >
        <div>
          <el-input v-model="reviewToEdit.txt"></el-input>
        </div>
        <button>SAVE</button>
      </form>
    </section>
    <section class="review-list">
      <ul class="review-list">
        <li v-for="review in reviews" :key="review._id">
          <h3>{{ review.txt }}</h3>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";

export default {
  props: [],
  data() {
    return {
      currToy: "",
      value: 2.7,
      reviewToEdit: {
        txt: "",
        aboutToyId: this.toyId,
      },
    };
  },
  created() {
    if (this.toyId)
      toyService.getById(this.toyId).then((toy) => (this.currToy = toy));
    this.$store.dispatch({
      type: "loadReviews",
      filterBy: { toyId: this.toyId },
    });
  },
  updated() {},
  destroyed() {},
  methods: {
    goBack() {
      this.$router.push("/");
    },
    async addReview() {
      this.reviewToEdit.aboutToyId = this.toyId;
      await this.$store.dispatch({
        type: "addReview",
        review: this.reviewToEdit,
      });
      this.reviewToEdit = { txt: "", aboutToyId: null };
    },
  },
  computed: {
    reviews() {
      return this.$store.getters.reviews;
    },
    toyId() {
      return this.$route.params.toyId;
    },
    labelsToShow() {
      return this.currToy.labels.join(",");
    },
    DatelsToShow() {
      const date = new Date(this.currToy.createdAt);
      return date.toLocaleTimeString();
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  watch: {},
  components: {},
};
</script>