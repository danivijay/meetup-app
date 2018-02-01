<template>
  <v-dialog v-model="dialog" persistent max-width="360">
    <v-btn class="secondary" slot="activator">
      <v-icon left>add</v-icon>
      {{ userIsRegistered ? 'Unregister' : 'Register' }}
    </v-btn>
    <v-card>
      <v-card-title v-if="userIsRegistered">
        Are you sure to unregister from this meetup?
      </v-card-title>
      <v-card-title v-else>
        Register for meetup?
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        You can always change your descision later on
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
        <v-btn color="primary" flat @click.stop="onAgree">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetupId'],
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    userIsRegistered () {
      return this.$store.getters.user.registeredMeetups
        .findIndex(meetupId => {
          return meetupId === this.meetupId
        }) >= 0
    }
  },
  methods: {
    onAgree () {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
      } else {
        this.$store.dispatch('registerUserForMeetup', this.meetupId)
      }
    }
  }
}
</script>

<style>

</style>
