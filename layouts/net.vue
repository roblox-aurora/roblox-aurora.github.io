<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <navigation v-model="drawer" :items="items" />
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app flat dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon href="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <!--
      <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <v-btn text to="/net/api" exact> API Docs </v-btn>
    </v-app-bar>
    <v-main>
      <v-container
        ><div
          v-if="this.$route.fullPath.match('/net/legacy')"
          class="hint error"
        >
          This is documentation for the old 1.x version of Net
        </div>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; Jonathan Holmes {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<style lang="scss">
.v-application pre code {
  all: unset;
}
.hint {
  padding: 10px;
  font-style: italic;

  &.tip {
    background: lighten(skyblue, 20%);
  }

  &.error {
    color: white;
    background: lighten(orangered, 20%) !important;
  }

  &.warn {
    background: lighten(orange, 30%);
  }
}
</style>
<script>
export default {
  data() {
    // this.fetch();
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          type: 'header',
          logo: '/images/net/logo.png',
        },
        {
          type: 'link',
          icon: 'mdi-apps',
          title: 'Home',
          to: '/net',
        },
        {
          type: 'category',
          path: '^/net/install\\-',
          title: 'Installation',
          icon: 'mdi-package-variant',
          children: [
            {
              type: 'link',
              title: 'Install for TypeScript',

              to: '/net/install-typescript',
            },
          ],
        },
        { type: 'divider' },
        {
          type: 'category',
          href: 'https://roblox-aurora.github.io/rbx-net',
          path: '^/net/legacy/',
          title: '<= v1.3.x',
          icon: 'mdi-archive',
          children: [
            {
              type: 'category',
              path: '^/net/legacy/install',
              title: 'Installation',
              icon: 'mdi-package-variant',
              children: [
                {
                  type: 'link',
                  title: 'Install for TypeScript',

                  to: '/net/legacy/install',
                },
                {
                  type: 'link',
                  title: 'Install for Lua',

                  to: '/net/legacy/install-lua',
                },
              ],
            },
            {
              type: 'link',
              title: 'API',
              to: '/net/legacy/api',
              icon: 'mdi-api',
            },
            {
              type: 'link',
              href: 'https://roblox-aurora.github.io/rbx-net',
              path: '^/net/legacy\\-',
              title: 'v1.3.x',
              icon: 'mdi-archive',
            },
          ],
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Roblox Networking',
    }
  },
}
</script>
