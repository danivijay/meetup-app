<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="info" class="white--text">

          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs5>
                <v-card-media
                  src="http://images.financialexpress.com/2015/07/Kochi-info-park.jpg"
                  height="160px"
                  contain
                ></v-card-media>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div class="headline">Kochi DigitalOcean</div>
                  <div>Join sharks all over kochi</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                  flat dark
                  to="/meetups/1"
                  >
                    <v-icon left>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
