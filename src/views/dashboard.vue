<template>
  <section class="dashboard-container flex">
    <div class="dashboard-details">
      <h1>Welcome User!</h1>
      <p>
        Here is a few details about out store stock. Our stock updating every
        day with new stuff, don't forget to click above to start shopping!
      </p>
    </div>
    <toy-chart :inventoryPerToy="inventoryPerToy" />
  </section>
</template>

<script>
import toyChart from "../components/toy-chart.vue";
export default {
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
  computed: {
    inventoryPerToy() {
      if (!this.$store.getters.allToys) return null;
      return this.$store.getters.allToys.reduce((acc, toy) => {
        toy.labels.forEach((label) => {
          if (!acc[label]) acc[label] = { count: 0, stockCount: 0 };
          if (toy.stock) acc[label].stockCount++;
          return acc[label].count++;
        });
        return acc;
      }, {});
    },
  },
  components: {
    toyChart,
  },
};
</script>

<style>
</style>