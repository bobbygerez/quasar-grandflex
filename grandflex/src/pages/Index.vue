<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <q-btn>asdf</q-btn>
    <div>{{ provinces }}</div>
  </q-page>
</template>
<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed: {
	provinces(){
		return this.$store.getters.provinces
	}
}
}
</script>
