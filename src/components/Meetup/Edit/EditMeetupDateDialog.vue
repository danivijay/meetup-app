<template>
  <v-dialog v-model="dialog" max-width="320px" persistent>
    <v-btn flat slot="activator">
      <v-icon left>mode_edit</v-icon>
      Date
    </v-btn>
    <v-card>
      <v-card-title>
        Edit Date
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-date-picker v-model="editableDate" style="width: 100%;" actions>
          <template slot-scope="{save, cancel}">
            <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
            <v-btn color="primary" flat @click.stop="onSaveChanges">Save</v-btn>
          </template>
        </v-date-picker>
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
      editableDate: null
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = new Date(this.meetup.date)
      const newDay = new Date(this.editableDate).getUTCDate()
      const newMonth = new Date(this.editableDate).getUTCMonth()
      const newYear = new Date(this.editableDate).getUTCFullYear()
      newDate.setUTCDate(newDay)
      newDate.setUTCMonth(newMonth)
      newDate.setUTCFullYear(newYear)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    let date = new Date(this.meetup.date)
    let day = date.getUTCDate()
    let month = date.getUTCMonth() + 1
    let year = date.getUTCFullYear()
    this.editableDate = year + '-' + month + '-' + day
  }
}
</script>

<style>

</style>
