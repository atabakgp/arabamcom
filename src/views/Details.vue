<template>
  <div class="details">
    <b-spinner class="spinner" variant="primary" v-if="loading"></b-spinner>

    <div class="container" v-else>
      <h5>
        <router-link
          to="/"
          class="mb-4 d-inline-block bg-success text-white p-2 rounded"
          >Back to the list page</router-link
        >
      </h5>

      <h5 class="details__title mb-4 border-bottom pb-3">
        {{ details.title }}
      </h5>
      <div class="row">
        <div class="col-lg-8">
          <Carousel />
        </div>
        <div class="col-lg-4 details__description">
          <h3 class="details__price mb-2">
            {{ details.priceFormatted }}
          </h3>
          <h5 class="mb-3" v-if="details.location">
            {{ details.location.cityName }} /
            {{ details.location.townName }}
          </h5>
          <div class="details__date d-flex justify-content-between mb-2">
            <b>ilan tarihi:</b> {{ details.dateFormatted }}
          </div>
          <div class="details__model d-flex justify-content-between mb-2">
            <b>model:</b> {{ details.modelName }}
          </div>
          <div
            class="d-flex justify-content-between mb-2"
            v-for="(property, index) in details.properties"
            :key="index"
          >
            <b>{{ property.name }}: </b>
            <span>{{ property.value }}</span>
          </div>
          <div class="col-12 border-top py-3" v-if="details.userInfo">
            <b>
              {{ details.userInfo.nameSurname }}
              <div>Telefon: {{ details.userInfo.phoneFormatted }}</div>
            </b>
          </div>
        </div>
        <div class="col-12 my-3" v-if="details.text">
          <h5 class="pb-3">AÇIKLAMA</h5>
          <div v-html="details.text" class="details__description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import { mapGetters } from "vuex";

export default {
  name: "carDetails",
  components: {
    Carousel,
  },

  mounted() {
    const params = {
      id: this.$route.params.id,
    };

    this.$store.dispatch("getDetails", params);
  },

  computed: {
    ...mapGetters(["details", "loading"]),
  },
};
</script>

<style lang="scss">
a {
  color: #000;
  text-decoration: none;
  font-size: 14px;
}

.details {
  &__description {
    padding: 30px;
    border-radius: 16px;
    padding-top: 20px;
    box-shadow: 3px 2px 14px 1px gainsboro;

    img {
      width: 100%;
    }
  }
}
</style>
