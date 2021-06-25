<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="(image, i) in details.photos" :key="i">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="carouselImage(image, '580x435')"
            alt="image slot"
            @click="index = i"
          />
          <vue-gallery-slideshow
            :images="galleryImages('800x600')"
            :index="index"
            @close="index = null"
          ></vue-gallery-slideshow>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  components: {
    VueGallerySlideshow,
  },

  data() {
    return {
      slide: 0,
      sliding: null,
      index: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },

    carouselImage(photo, resolution) {
      return photo.replace("{0}", resolution);
    },

    galleryImages(resolution) {
      let gallery = [];
      this.details.photos.map((photo) => {
        gallery.push(this.carouselImage(photo, resolution));
      });
      return gallery;
    },
  },

  computed: {
    ...mapGetters(["details"]),
  },
};
</script>

<style lang="scss" scoped>
img {
  cursor: crosshair;
}
</style>
