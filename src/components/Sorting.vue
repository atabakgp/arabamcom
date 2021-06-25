<template>
  <div class="d--md-flex align-items-center justify-content-between mb-3">
    <div class="d-flex align-items-center">
      <div class="me-3 sorting-btn" @click="showModal()">
        <b>Sıralama</b>
      </div>
      <div
        class="sorting-items d-md-block"
        :class="toggleModal ? 'd-block' : 'd-none'"
      >
        <b-tabs pills nav-wrapper-class="">
          <b-tab title="En ucuz" @click="sorting('0', '0')"></b-tab>
          <b-tab title="En pahali" @click="sorting('0', '1')"> </b-tab>
          <b-tab title="En eski ilan" @click="sorting('1', '0')"></b-tab>
          <b-tab title="En yeni ilan" @click="sorting('1', '1')"></b-tab>
          <b-tab title="En yeni model" @click="sorting('2', '1')"></b-tab>
          <b-tab title="En eski model" @click="sorting('2', '0')"></b-tab>
        </b-tabs>
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-md-end">
      <h6 class="me-3">Item per page</h6>
      <b-tabs>
        <b-tab
          title="24"
          @click="changePerPage(24)"
          class="change-perpage me-4"
        ></b-tab>
        <b-tab
          title="12"
          @click="changePerPage(12)"
          class="change-perpage"
        ></b-tab>
      </b-tabs>
    </div>
    <div class="overlay" @click="showModal()" v-show="toggleModal"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sorting",

  data: () => ({
    toggleModal: false,
  }),

  computed: {
    ...mapGetters(["sortingDetails"]),
  },

  methods: {
    sorting(sort, sortDirection) {
      const queryParams = {
        sort,
        sortDirection,
      };
      this.$store.commit("sortingDetails", queryParams);
      this.$store.dispatch("filterList");
      this.toggleModal = false;
    },

    changePerPage(perPage) {
      const params = {
        take: perPage,
        skip: parseInt(this.sortingDetails.skip / perPage) * perPage,
      };
      this.$store.commit("sortingDetails", params);
      this.$store.dispatch("filterList");
    },

    showModal() {
      this.toggleModal = !this.toggleModal;
    },
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  .sorting-items {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background-color: #fff;
    width: 75%;
    .nav {
      flex-direction: column;
    }
  }

  .sorting-btn {
    border: 1px solid;
    padding: 5px 10px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: 0.6;
    z-index: 10;
  }
}
</style>
