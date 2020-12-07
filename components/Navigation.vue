<template>
  <!-- <v-navigation-drawer
    :value="drawer"
    :clipped="clipped"
    fixed
    app
    @input="handleUpdate"
  > -->
  <v-list>
    <navigation-item
      v-for="item in items"
      :key="item.id || item.to || item.title"
      :item="item"
    />
  </v-list>
  <!-- </v-navigation-drawer> -->
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
    value: Boolean,
  },
})
export default class Navigation extends Vue {
  public items!: NavigationPath[]
  private value!: boolean
  drawer = this.value
  clipped = true
  handleUpdate() {
    this.$emit('input', this.drawer)
  }
}
</script>
