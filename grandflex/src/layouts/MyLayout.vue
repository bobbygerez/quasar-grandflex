<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Grandflex Interiors
          <div slot="subtitle">Trading Inc.</div>
        </q-toolbar-title>

        <q-btn flat round dense icon="mail" />
        <q-btn flat round dense icon="alarm" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Categories</q-list-header>
        <q-collapsible icon="inbox" label="Inbox" sublabel="Where your email is">
    <q-item link to="/inbox/1">
      <q-item-side icon="mail" />
      <q-item-main label="Email 1" />
    </q-item>
    <q-item link to="/inbox/2">
      <q-item-side icon="mail" />
      <q-item-main label="Email 2" />
    </q-item>
    <q-collapsible icon="favorite" label="Favorites">
      <q-item link to="/inbox/favorites/1">
        <q-item-side icon="mail" />
        <q-item-main label="Favorite 1" />
      </q-item>
      <q-item to="/inbox/favorites/2">
        <q-item-side icon="mail" />
        <q-item-main label="Favorite 2" />
      </q-item>
    </q-collapsible>
    <q-item to="/inbox/3">
      <q-item-side icon="mail" />
      <q-item-main label="Email 3" />
    </q-item>
  </q-collapsible>

  <!-- menu link -->
  <q-item link to="/snoozed">
    <q-item-side icon="schedule" />
    <q-item-main>
      <q-item-tile label>Snoozed</q-item-tile>
    </q-item-main>
  </q-item>

  <!-- collapsible to hide sub-level menu entries -->
  <q-collapsible icon="send" label="Sent">
    <q-item to="/sent/1">
      <q-item-side icon="mail" />
      <q-item-main label="Email 1" />
    </q-item>
  </q-collapsible>

  <!-- menu link -->
  <q-item link to="/trash">
    <q-item-side icon="delete" />
    <q-item-main>
      <q-item-tile label>Trash</q-item-tile>
    </q-item-main>
  </q-item>
        
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
