<template>
  <v-app>
    <v-navigation-drawer
    temporary
    v-model="drawer"
    absolute
    >
      <v-list>
        <v-list-tile @click="" v-for="menuItem in menuItems" :key="menuItem.title">
          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ menuItem.title }}
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
        <v-btn flat v-for="menuItem in menuItems" :key="menuItem.title">
          <v-icon left>{{ menuItem.icon }}</v-icon>
          {{ menuItem.title }}
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
      drawer: false,
      menuItems: [
        { icon: 'group', title: 'View Meetups' },
        { icon: 'add_circle', title: 'Organize Meetup' },
        { icon: 'account_circle', title: 'Profile' },
        { icon: 'person_add', title: 'Sign up' },
        { icon: 'lock_open', title: 'Login' }
      ]
    }
  }
}
</script>

<style>
  html { overflow-y: auto }
</style>
