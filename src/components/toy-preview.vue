
<template>
  <section class="preview-img flex">
    <div class="toy-card flex">
      <img :src="require(`@/img/${toy.url}.jpg`)" alt="" />
      <h1>{{ currToy.name }}</h1>
      <el-rate v-model="value" disabled text-color="#ff9900"> </el-rate>
      <span v-if="currToy.stock" style="color: #1db954"
        >Top Rated <span style="color: #222">${{ currToy.price }}</span></span
      >
      <span v-else>${{ currToy.price }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    toy: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      currToy: this.toy,
      value: 2.7,
    };
  },
  created() {},
  updated() {},
  destroyed() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>