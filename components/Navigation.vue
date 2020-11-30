<template>
  <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
    <v-list>
      <navigation-item
        v-for="item in items"
        :key="item.id || item.to || item.title"
        :item="item"
      />
      <!-- <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import NavigationItem from './NavigationItem.vue'

export interface NavigationPath {
  type: 'link'
  icon: string
  title: string
  to: string
}

@Component({
  components: { NavigationItem },
  props: {
    items: Array,
  },
})
export default class Navigation extends Vue {
  public items!: NavigationPath[]
  drawer = true
  clipped = true
}
</script>
