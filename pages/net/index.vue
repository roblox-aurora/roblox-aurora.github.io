<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <!-- <nuxt-content :document="page" /> -->
      <center>
        <img src="/images/net/logo.png" />
        <h1>Net</h1>
        <p>
          Net (Networking) is a networking library for Roblox, built in
          TypeScript. It simplifies the creation and management of networking in
          Roblox.
        </p>
      </center>
      <nuxt-content :document="features" />
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'net',
  components: {},
  async asyncData({ $content, params, error }) {
    const features = await $content('net/_features')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'page not found' })
      })
    return {
      features,
    }
  },
}
</script>
