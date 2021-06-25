<template>
  <div class="overflow-auto text-center my-3 list-pagination">
    <div class="d-flex justify-content-center align-items-center">
      <div
        @click="prevPage()"
        v-if="currentPage > 1"
        class="list-pagination__btn"
      >
        Previous
      </div>

      <p class="mt-3 mx-5">Current Page: {{ currentPage }}</p>

      <div @click="nextPage()" class="list-pagination__btn">Next</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentPage", "sortingDetails"]),
  },

  methods: {
    nextPage() {
      const params = {
        skip:
          parseInt(this.sortingDetails.skip) +
          parseInt(this.sortingDetails.take),
      };

      this.$store.commit("sortingDetails", params);
      this.$store.dispatch("filterList");
    },

    prevPage() {
      const params = {
        skip:
          parseInt(this.sortingDetails.skip) -
          parseInt(this.sortingDetails.take),
      };

      this.$store.commit("sortingDetails", params);
      this.$store.dispatch("filterList");
    },
  },
};
</script>

<style lang="scss" scoped>
.list-pagination {
  &__btn {
    border: 1px solid;
    cursor: pointer;
    padding: 3px 10px;
    border-radius: 5px;
  }
}
</style>
