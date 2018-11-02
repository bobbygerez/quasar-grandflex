<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
	let data = this
	axios.get('http://localhost/estoreapi/public/api/get-provinces')
	.then(function(res){
        data.$store.dispatch('provinces', res.data.provinces)
    })
},
  name: 'App'
}
</script>

<style>
</style>
