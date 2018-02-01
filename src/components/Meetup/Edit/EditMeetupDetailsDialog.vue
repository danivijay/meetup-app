<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <v-btn flat slot="activator">
      <v-icon left>mode_edit</v-icon>
      Edit
    </v-btn>
    <v-card>
      <v-card-title>
        Edit Meetup
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field
          name="title"
          id="title"
          label="Meetup name"
          v-model="editedTitle"
          required
          :rules="titleRules"
          ></v-text-field>
        <v-text-field
          name="description"
          id="description"
          label="Description"
          multi-line
          v-model="editedDescription"
          required
          :rules="descriptionRules"
          ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
        <v-btn color="primary" flat @click.stop="onSaveChanges">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      titleRules: [
        (v) => !!v || 'Name is required'
      ],
      descriptionRules: [
        (v) => !!v || 'Description is required'
      ],
      dialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return false
      }
      this.dialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>

<style>

</style>
