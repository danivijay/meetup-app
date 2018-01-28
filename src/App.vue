<template>
  <v-app>
    <v-navigation-drawer
    temporary
    v-model="drawer"
    absolute
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            View Meetups
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        The Meetup App
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>group</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main></main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>
  html { overflow-y: auto }
</style>
