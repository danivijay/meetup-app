<template>
  <v-app>
    <v-navigation-drawer
    temporary
    v-model="drawer"
    absolute
    >

      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              {{ appname }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <v-list>
        <v-list-tile
          v-for="menuItem in menuItems"
          :to="menuItem.link"
          exact
          :key="menuItem.title">
          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ menuItem.title }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Logout
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
        ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link tag="span" to="/" style="cursor: pointer">{{ appname }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
        >
        <v-btn flat
          v-for="menuItem in menuItems"
          :to="menuItem.link"
          exact
          :key="menuItem.title">
          <v-icon left>{{ menuItem.icon }}</v-icon>
          {{ menuItem.title }}
        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          @click="onLogout" flat>
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view></router-view>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      appname: 'The Meetup App',
      drawer: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
          { icon: 'home', title: 'Home', link: '/' },
          { icon: 'person_add', title: 'Signup', link: '/signup' },
          { icon: 'lock_open', title: 'Signin', link: '/signin' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'home', title: 'Home', link: '/' },
          { icon: 'group', title: 'View Meetups', link: '/meetups' },
          { icon: 'add_circle', title: 'Organize Meetup', link: '/meetup/new' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
  html { overflow-y: auto }
</style>
