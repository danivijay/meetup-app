<template>
  <v-app>
    <v-navigation-drawer
    temporary
    v-model="drawer"
    absolute
    class="hidden-sm-and-up"
    >
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            View Meetups
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-sm-and-up"
        ></v-toolbar-side-icon>
      <v-toolbar-title>
        The Meetup App
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-xs-only"
        >
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
