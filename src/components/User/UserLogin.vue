<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3 elevation-1 class="white pt-4 pb-4 pl-4 pr-4">

          <v-form v-model="valid" ref="form" lazy-validation>

            <v-text-field
              label="E-mail"
              type="email"
              v-model="email"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              required
            ></v-text-field>

            <v-btn
              @click="onSignin"
              :disabled="!valid"
            >
              Login
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
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== 'undefined') {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }
  }
}
</script>

<style>

</style>
