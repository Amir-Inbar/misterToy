
<template>
  <section class="toy-edit flex">
    <form @submit.prevent="save" class="toy-edit-main flex" v-if="toyToEdit">
      <div>
        Toy Name:
        <el-input v-model="toyToEdit.name"></el-input>
        <!-- <input type="text" v-model="toyToEdit.name"> -->
      </div>
      <div>
        Toy Price:
        <el-input-number
          size="medium"
          v-model="toyToEdit.price"
        ></el-input-number>
      </div>
      <div>
        Toy Label:
        <el-select
          class="filter-labels"
          v-model="toyToEdit.labels"
          multiple
          collapse-tags
          style="margin-left: 20px"
          placeholder="Select"
        >
          <el-option
            v-for="label in labels"
            :key="label"
            :label="label"
            :value="label"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        Have Stock:
        <el-radio v-model="toyToEdit.inStock" label="1" :value="true"
          >In Stock</el-radio
        >
        <el-radio v-model="toyToEdit.inStock" label="2" :value="false"
          >Out Of Stock</el-radio
        >
      </div>
      <div>
        Toy Image:
        <el-input v-model="toyToEdit.url"></el-input>
      </div>
      <el-button type="submit" @click="save">Save</el-button>
      <el-button type="info" @click="goBack">Back</el-button>
    </form>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";

export default {
  props: {},
  data() {
    return {
      labels: [
        "On wheels",
        "Box game",
        "Art",
        "Baby",
        "Doll",
        "Puzzle",
        "Outdoor",
      ],
      num: 0,
      toyToEdit: "",
    };
  },
  created() {
    if (this.toyId)
      toyService.getById(this.toyId).then((toy) => {
        this.toyToEdit = toy;
      });
    else this.toyToEdit = toyService.getEmptyToy();
  },
  updated() {},
  destroyed() {},
  methods: {
    save() {
      if (this.toyId) {
        this.$store
          .dispatch({ type: "updateToy", toy: this.toyToEdit })
          .then(() => {
            this.$router.push("/");
          });
      } else {
        this.$store
          .dispatch({ type: "addToy", toy: this.toyToEdit })
          .then(() => {
            this.$router.push("/");
          });
      }
    },
    goBack() {
      this.$router.push("/");
    },
  },
  computed: {
    toyId() {
      return this.$route.params.toyId;
    },
  },
  watch: {},
  components: {},
};
</script>