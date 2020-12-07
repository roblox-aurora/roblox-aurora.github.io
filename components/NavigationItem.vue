<template>
  <v-list v-model="value" dense :nav="level > 10">
    <v-list-item
      v-if="item.type == 'link'"
      :href="item.href"
      :to="item.to"
      router
      exact
    >
      <v-list-item-action v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-if="item.type == 'header'">
      <v-list-item-content>
        <v-row no-gutters align="center">
          <v-col v-if="item.logo">
            <v-img v-if="item.logo" :src="item.logo" style="width: 50px" />
          </v-col>
          <v-col>
            <v-list-item-title class="title">Net</v-list-item-title>
            <v-list-item-subtitle>
              Networking Library for Roblox
            </v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-divider v-if="item.type == 'divider'" />
    <v-list-group
      v-if="item.type == 'category'"
      :sub-group="level > 0"
      :prepend-icon="level == 0 ? item.icon : undefined"
      :value="item.path !== undefined && matchPath(item.path)"
    >
      <template v-slot:activator>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-action v-if="item.icon && level > 0"
          ><v-icon>{{ item.icon }}</v-icon></v-list-item-action
        >
      </template>
      <navigation-item
        v-for="child in item.children"
        :key="child.to"
        :level="level + 1"
        :item="child"
      />
    </v-list-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavigationItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
    value: {
      type: Boolean,
      default: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    matchPath(target: string) {
      return this.$route.fullPath.match(target)
    },
  },
})
</script>
