<template>
  <div class="container">
    <Sorting />

    <div v-if="loading" class="spinner-wrapper">
      <b-spinner class="spinner" variant="primary"></b-spinner>
    </div>

    <div v-else>
      <div class="listing row">
        <div
          v-for="car in dataList"
          :key="car.id"
          class="listing__item col-lg-3"
        >
          <router-link :to="'details/' + car.id" class="align-items-center">
            <div class="listing__photo ps-0">
              <img :src="carPhoto(car.photo, '160x120')" alt="" class="w-100" />
            </div>
            <div class="listing__model text-center py-1">
              <b> {{ car.modelName }}</b>
            </div>
            <div class="listing__title">
              {{ car.title }}
            </div>
            <div class="d-flex justify-content-between py-2">
              <div class="listing__date">
                ilan tarihi: {{ car.dateFormatted }}
              </div>
              <div class="listing__year">
                {{ carYear(car.properties) }}
              </div>
            </div>
            <div class="listing__price">
              {{ car.priceFormatted }}
            </div>
            <div class="listing__location d-flex">
              <div class="me-2">{{ car.location.cityName }} /</div>
              <div>{{ car.location.townName }}</div>
            </div>
            <div class="overlay"></div>
            <div class="see-more w-100 text-center">Daha fazla gör</div>
          </router-link>
        </div>
      </div>

      <Pagination />
    </div>
  </div>
</template>

<script>
import Sorting from "../components/Sorting.vue";
import Pagination from "../components/Pagination.vue";
import { mapGetters } from "vuex";

export default {
  name: "List",
  components: {
    Sorting,
    Pagination,
  },

  computed: {
    ...mapGetters(["dataList", "loading", "sortingDetails"]),
  },

  methods: {
    carPhoto(photo, resolution) {
      return photo.replace("{0}", resolution);
    },

    carYear(properties) {
      for (const key in properties) {
        if (properties[key].name == "year") {
          return properties[key].value;
        }
      }
    },
  },

  mounted() {
    const params = {
      sort: "0",
      sortDirection: "0",
      take: "20",
      skip: "0",
    };
    this.$store.commit("sortingDetails", params);
    this.$store.dispatch("filterList", params);
    this.$store.commit("details", {});
  },
};
</script>

<style lang="scss" scoped>
.head {
  background-color: #eee;
}
.spinner-wrapper {
  position: fixed;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  .spinner {
    height: 5rem;
    width: 5rem;
  }
}
.listing {
  font-size: 14px;

  &__item {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    transition: 0.2s;
    color: #000;
    display: block;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 15px;
    position: relative;
    height: 100%;

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      opacity: 0;
      transition: 0.4s;
      border-radius: 10px;
    }

    .see-more {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #000;
      border-radius: 40px;
      visibility: hidden;
      padding: 5px 8px;
      transition: 0.1s;
      font-size: 17px;
      font-size: 18px;
      font-weight: bold;
    }

    &:hover {
      box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.1);
      .overlay {
        opacity: 0.8;
      }
      .see-more {
        visibility: visible;
      }
    }
  }

  &__price {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
