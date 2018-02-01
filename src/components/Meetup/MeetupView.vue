<template>
  <v-container>
    <v-layout>

      <v-flex
        v-if="loading"
        xs12 class="text-xs-center">
         <v-progress-circular
          indeterminate
          v-bind:size="70"
          v-bind:width="5"
          color="primary"></v-progress-circular>
      </v-flex>

      <v-flex
        v-else
        xs12 sm10 md8 offset-sm1 offset-md2>
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

              <template v-if="userIsCreator">
                <app-edit-meetup-date-dialog :meetup="meetup"></app-edit-meetup-date-dialog>
                <app-edit-meetup-time-dialog :meetup="meetup"></app-edit-meetup-time-dialog>
              </template>
              <br>

              <span>{{ meetup.location }}</span><br>
              <span>{{ meetup.description }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>

            <template v-if="userIsCreator" class="text-xs-right">
              <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
            </template>

            <app-meetup-register-dialog :meetupId="meetup.id"></app-meetup-register-dialog>

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
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style>

</style>
