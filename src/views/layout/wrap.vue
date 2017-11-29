<template>
  <div class="">
  	<app-header></app-header>
  	<app-menu :menuList="menuList"></app-menu>
  	<app-main></app-main>
  </div>
</template>

<script>
	//import {Header,Menu,Main} from './layout/'
	import AppHeader from './header.vue'
	import AppMenu from './menu.vue'
	import AppMain from './main.vue'
	
export default {
	data(){
		return {
			menuList:['1','2','3']
		}
	},
	components:{
		AppHeader,
		AppMenu,
		AppMain
	}
	
}
</script>

<style lang="css">
</style>
