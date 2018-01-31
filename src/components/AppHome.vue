<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6
      class="text-xs-center text-sm-right">
        <v-btn
        class="primary"
        large
        to="/meetups"
        >Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6
      class="text-xs-center text-sm-left">
        <v-btn
        class="primary"
        large
        to="/meetup/new"
        >Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          v-if="loading"
          indeterminate
          v-bind:size="70"
          v-bind:width="5"
          color="primary"></v-progress-circular>
        <v-carousel v-else>
          <v-carousel-item style="cursor: pointer"
            v-for="item in carouselItems"
            v-bind:src="item.imageSrc"
            @click="navigateTo(item.id)"
            :key="item.id">
            <div class="carousel-title">{{ item.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout class="mt-3">
      <v-flex xs12
      class="text-xs-center">
        <p>Join our awesome meetups</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    carouselItems () {
      return this.$store.getters.featuredMeetups
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    navigateTo (id) {
      this.$router.push(`/meetups/${id}`)
    }
  }
}
</script>

<style scoped>
.carousel-title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0,0,0,.5);
  color: white;
  padding: 20px;
  font-size: 2em;
}
</style>
