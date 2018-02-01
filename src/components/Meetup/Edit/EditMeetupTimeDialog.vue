<template>
  <v-dialog v-model="dialog" max-width="320px" persistent>
    <v-btn flat slot="activator">
      <v-icon left>mode_edit</v-icon>
      Time
    </v-btn>
    <v-card>
      <v-card-title>
        Edit Time
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-time-picker v-model="editableTime" style="width: 100%;" actions format="24hr">
          <template slot-scope="{save, cancel}">
            <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
            <v-btn color="primary" flat @click.stop="onSaveChanges">Save</v-btn>
          </template>
        </v-time-picker>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      dialog: false,
      editableTime: null
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = new Date(this.meetup.date)
      const hours = this.editableTime.match(/^(\d+)/)[1]
      const minutes = this.editableTime.match(/:(\d+)/)[1]
      newDate.setHours(hours)
      newDate.setMinutes(minutes)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    this.editableTime = new Date(this.meetup.date).toTimeString()
  }
}
</script>

<style>

</style>
