
<template>
  <section class="store-list-container">
    <ul>
      <draggable :toysToShow="toysToShow" class="store-list-main grid">
        <li v-for="toy in toysToShow" class="toy-list" :key="toy._id">
          <div class="toy-preview">
            <toy-preview :toy="toy" />
            <div class="list-btns flex">
              <router-link :to="'/edit/' + toy._id">Edit</router-link>
              <router-link :to="'/details/' + toy._id">Details</router-link>
              <button
                @click="$emit('removeToy', toy._id)"
                class="remove-toy-btn"
              >
                X
              </button>
            </div>
          </div>
        </li>
      </draggable>
    </ul>
  </section>
</template>

<script>
import toyPreview from "../components/toy-preview.vue";
import draggable from "vuedraggable";

export default {
  props: ["toys"],
  data() {
    return {};
  },
  created() {},
  updated() {},
  destroyed() {},
  methods: {},
  computed: {
    toysToShow() {
      console.log(this.$store.getters.toysToShow);
      return this.$store.getters.toysToShow;
    },
  },
  watch: {},
  components: {
    toyPreview,
    draggable,
  },
};
</script>