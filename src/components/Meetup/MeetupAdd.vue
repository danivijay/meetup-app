<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3>
        <h1 class="primary--text">Organize Meetup</h1>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Meetup name"
            v-model="meetupInfo.title"
            :rules="descriptionRules"
            required
          ></v-text-field>
          <v-text-field
            label="Location"
            v-model="meetupInfo.location"
            :rules="locationRules"
            required
          ></v-text-field>
          <v-text-field
            label="Image URL"
            v-model="meetupInfo.imageSrc"
            :rules="imageRules"
            required
          ></v-text-field>
          <img :src="meetupInfo.imageSrc" style="width: 100%">
          <v-text-field
            label="Description"
            v-model="meetupInfo.description"
            :rules="descriptionRules"
            required
            multi-line
          ></v-text-field>
          <v-btn @click="createMeetup" :disabled="!valid">
            Submit
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      titleRules: [
        (v) => !!v || 'Name is required'
      ],
      locationRules: [
        (v) => !!v || 'Location is required'
      ],
      imageRules: [
        (v) => !!v || 'Image is required'
      ],
      descriptionRules: [
        (v) => !!v || 'Description is required'
      ],
      meetupInfo: {
        title: '',
        location: '',
        imageSrc: '',
        description: ''
      }
    }
  },
  methods: {
    createMeetup () {
      if (this.$refs.form.validate()) {
        this.meetupInfo.date = new Date()
        this.$store.dispatch('createMeetup', this.meetupInfo)
        this.$router.push('/meetups')
      } else {
        console.log('Invalid form content')
      }
    }
  }
}
</script>

<style>

</style>
