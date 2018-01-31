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

          <v-btn
            @click="onPickFile"
            class="primary">
            Upload image
          </v-btn>
          <input
            type="file"
            style="display: none;"
            ref="fileInput"
            accept="image/*"
            @change="onFilePicked">

          <img :src="meetupInfo.imageSrc" style="width: 100%">
          <v-text-field
            label="Description"
            v-model="meetupInfo.description"
            :rules="descriptionRules"
            required
            multi-line
          ></v-text-field>

          <v-menu
            lazy
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              label="Date"
              v-model="date"
              :rules="dateRules"
              prepend-icon="event"
              readonly
              required
            ></v-text-field>
            <v-date-picker
            v-model="date"
            no-title
            scrollable
            actions
            ></v-date-picker>
          </v-menu>

          <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              label="Time"
              v-model="time"
              :rules="timeRules"
              prepend-icon="access_time"
              readonly
              required
            ></v-text-field>
            <v-time-picker
              v-model="time"
              autosave
              format="24hr"
              ></v-time-picker>
          </v-menu>

          <v-btn
          @click="createMeetup"
          class="primary">
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
      dateRules: [
        (v) => !!v || 'Date is required'
      ],
      timeRules: [
        (v) => !!v || 'Time is required'
      ],
      meetupInfo: {
        title: '',
        location: '',
        imageSrc: '',
        description: '',
        image: null
      },
      date: '',
      time: ''
    }
  },
  computed: {
    datetime () {
      let date = new Date()
      if (this.date !== '' && this.time !== '') {
        let msec = Date.parse(this.date + ' ' + this.time)
        date = new Date(msec)
      }
      return date
    }
  },
  methods: {
    createMeetup () {
      if (this.$refs.form.validate() && this.datetime && this.meetupInfo.image) {
        this.meetupInfo.date = this.datetime
        this.$store.dispatch('createMeetup', this.meetupInfo)
        this.$router.push('/meetups')
      } else {
        console.log('Invalid form content')
      }
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please select a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.meetupInfo.imageSrc = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.meetupInfo.image = files[0]
    }
  }
}
</script>

<style>

</style>
