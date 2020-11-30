<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <!-- <v-card> -->
      <nuxt-content :document="page" />
      <!-- </v-card> -->
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'docs',
  components: {},
  async asyncData({ $content, params, error }) {
    const page = await $content('roact-dnd/' + params.pathMatch ?? 'index')
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
