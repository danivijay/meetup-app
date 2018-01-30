<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card>
          <v-card-media
            class="white--text"
            height="300px"
            :src="meetup.imageSrc"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <h3>{{ meetup.title }}</h3>
              <span class="grey--text">{{ meetup.date | dateFilter }}</span><br>
              <span>{{ meetup.location }}</span><br>
              <span>{{ meetup.description }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="secondary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      console.log(this.id)
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style>

</style>
