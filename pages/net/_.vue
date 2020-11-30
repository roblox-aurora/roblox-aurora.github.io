<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="10">
        <!-- <v-card> -->
        <nuxt-content :document="page" /> </v-col
    ></v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'net',
  components: {},
  async asyncData({ $content, params, error }) {
    const documents = {}
    const page = await $content('net/' + params.pathMatch ?? 'index')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'page not found' })
      })

    return {
      page,
    }
  },
}
</script>
