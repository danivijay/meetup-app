<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3 elevation-1 class="white pt-4 pb-4 pl-4 pr-4">

          <v-form v-model="valid" ref="form" lazy-validation>

            <v-text-field
              label="E-mail"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-text-field
              label="Confirm password"
              type="password"
              v-model="confirmPassword"
              :rules="[confirmPasswordRules]"
              required
            ></v-text-field>

            <v-btn
              @click="onSignup"
              :disabled="!valid"
            >
              Register
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
      password: '',
      confirmPassword: '',
      /* eslint-disable */
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v && v.length >= 8 || 'Password must be greater than 8 characters'
      ]
      /* eslint-enable */
    }
  },
  computed: {
    confirmPasswordRules () {
      return (this.password !== this.confirmPassword ? 'Passwords not matching' : true)
    },
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
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>

<style>

</style>
