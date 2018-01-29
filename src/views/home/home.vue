
<template>
	<div class="app-home">
		<navbar></navbar>
		<sidebar></sidebar>
		<app-main></app-main>
	</div>
</template>

<script>
	import { Navbar , Sidebar , AppMain } from '../layout/'
	export default {
		components:{
			Navbar,
			Sidebar,
			AppMain
		},
		data() {
			return {
				
			};
		},
		methods: {
			xxx() {
				
			}
		}
	}
</script>

<style>

</style>