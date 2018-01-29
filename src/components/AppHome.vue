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
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="item in carouselItems" v-bind:src="item.imageSrc" :key="item.id">
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
      carouselItems: [
        { title: "Kochi Infopark", imageSrc: "http://images.financialexpress.com/2015/07/Kochi-info-park.jpg", id: "asdsadsa"},
        { title: "Trivandrum Technopark", imageSrc: "http://cms.technopark.org/zcmspg/zupload/media/web_media/5363/1447309670855_2.jpg", id: "dasweasd"}
      ]
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
