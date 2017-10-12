<template>
  <div class="">
  	<app-header></app-header>
  	<app-menu></app-menu>
  	<app-main></app-main>
  </div>
</template>

<script>
	//import {Header,Menu,Main} from './layout/'
	import AppHeader from './layout/header.vue'
	import AppMenu from './layout/menu.vue'
	import AppMain from './layout/main.vue'
	
export default {
	components:{
		AppHeader,
		AppMenu,
		AppMain
	}
	
}
</script>

<style lang="css">
</style>
