<template>
  <div>
    <v-list-item v-if="item.type == 'link'" :to="item.to" router exact>
      <v-list-item-action v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <v-list-group
      v-if="item.type == 'category'"
      :value="item.path !== undefined && matchPath(item.path)"
    >
      <template v-slot:activator>
        <v-list-item-action v-if="item.icon"
          ><v-icon>{{ item.icon }}</v-icon></v-list-item-action
        >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </template>
      <navigation-item
        v-for="child in item.children"
        :key="child.to"
        :item="child"
      />
    </v-list-group>
  </div>
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
  },
  methods: {
    matchPath(target: string) {
      return this.$route.matched.some(
        ({ path, name, meta, matchAs, props, regex }) => {
          return path.match(target)
        }
      )
    },
  },
})
</script>
