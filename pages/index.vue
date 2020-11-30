<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <p>
        Below is a list of projects that are now documented, or are being
        documented.
      </p>
      <v-container fluid>
        <v-row v-for="project in projects" :key="project.title">
          <v-col>
            <v-card class="mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    {{ project.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle v-if="project.summary">{{
                    project.summary
                  }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <v-img :src="project.icon" />
                </v-list-item-avatar>
              </v-list-item>
              <v-card-actions>
                <v-btn
                  v-if="project.page"
                  color="primary"
                  nuxt
                  :to="project.page"
                  >Documentation</v-btn
                >
                <v-btn
                  v-if="project.oldPage"
                  color="danger"
                  :href="project.oldPage"
                >
                  <v-icon>mdi-open-in-new</v-icon> External Documentation</v-btn
                >
                <v-btn
                  v-if="project.github"
                  icon
                  color="danger"
                  :href="project.github"
                >
                  <v-icon>mdi-github</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {},
  data() {
    return {
      projects: [
        {
          title: 'Roblox Networking Library (RbxNet)',
          summary: 'Networking Library for Roblox',
          icon: '/images/net/logo.png',
          github: 'https://github.com/roblox-aurora/rbx-net',
          oldPage: 'https://roblox-aurora.github.io/rbx-net',
        },
        {
          title: 'Snapdragon',
          summary: 'Dragging & Snapping Utility Library for ROBLOX',
          icon: '/images/snapdragon/logo.png',
          github: 'https://github.com/roblox-aurora/rbx-snapdragon',
          oldPage: 'https://roblox-aurora.github.io/rbx-snapdragon',
        },
        {
          title: 'Zircon',
          summary: 'Zircon Command Console for Roblox',
          // icon: '/images/zirconium/logo.png',
          github: 'https://github.com/roblox-aurora/zircon',
          // oldPage: 'https://roblox-aurora.github.io/rbx-net',
        },
        {
          title: 'Roact Drag and Drop (RoactDnD)',
          summary: 'Drag and drop extension for the Roact library',
          icon: '/images/roact-dnd/logo.png',
          github: 'https://github.com/roblox-aurora/roact-dnd',
          page: '/roact-dnd',
        },
        {
          title: 'Zirconium',
          summary: 'Zirconium DSL for Roblox',
          icon: '/images/zirconium/logo.png',
          github: 'https://github.com/roblox-aurora/zirconium',
          // oldPage: 'https://roblox-aurora.github.io/rbx-net',
        },
      ],
    }
  },
}
</script>
