<template>
  <v-container>

    <v-layout row wrap
    v-for="meetup in meetups"
    class="mb-3"
    :key="meetup.id">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>

        <v-card color="info" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs5>
                <v-card-media
                  :src="meetup.imageSrc"
                  height="160px"
                  contain
                ></v-card-media>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ meetup.title }}</div>
                    <div>{{ meetup.date | dateFilter }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                  flat dark
                  :to="`/meetups/${meetup.id}`"
                  >
                    <v-icon left>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>

<style>

</style>
