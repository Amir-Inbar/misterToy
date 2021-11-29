<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["inventoryPerToy"],
  created() {
    for (const [key, value] of Object.entries(this.inventory)) {
      this.inventory[key] = ((value.stockCount / value.count) * 100).toFixed(2);
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: Object.keys(this.inventory),
      datasets: [
        {
          label: "Toys in-stock",
          backgroundColor: [
            "#78C257",
            "#555555",
            "#E50914",
            "#0096D6",
            "#FF5403",
            "#F3ED9E",
          ],
          data: Object.values(this.inventory),
        },
      ],
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
  computed: {},
  data() {
    return {
      inventory: this.inventoryPerToy,
    };
  },
};
</script>

<style>
</style>