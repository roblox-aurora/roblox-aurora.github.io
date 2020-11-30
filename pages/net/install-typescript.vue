<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <h1>Installing Net for TypeScript</h1>
      <v-subheader
        >The TypeScript version of Net requires&nbsp;
        <a href="https://roblox-ts.com">roblox-ts</a></v-subheader
      >
      <nuxt-content :document="page" />
    </v-col>
  </v-row>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  layout: 'net',
  async asyncData({ $content }) {
    return {
      page: await $content('net/install-typescript').fetch(),
    }
  },
})
</script>
