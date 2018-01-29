<template>
  <v-app>
    <v-navigation-drawer
    temporary
    v-model="drawer"
    absolute
    >
      <v-list>
        <v-list-tile
          v-for="menuItem in menuItems"
          router
          :to="menuItem.link"
          :key="menuItem.title">
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
        <router-link tag="span" to="/" style="cursor: pointer">The Meetup App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-xs-only"
        >
        <v-btn flat
          v-for="menuItem in menuItems"
          :to="menuItem.link"
          :key="menuItem.title">
          <v-icon left>{{ menuItem.icon }}</v-icon>
          {{ menuItem.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        { icon: 'group', title: 'View Meetups', link: '/meetups' },
        { icon: 'add_circle', title: 'Organize Meetup', link: '/meetup/new' },
        { icon: 'account_circle', title: 'Profile', link: '/profile' },
        { icon: 'person_add', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Login', link: '/login' }
      ]
    }
  }
}
</script>

<style>
  html { overflow-y: auto }
</style>
