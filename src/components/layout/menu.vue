
<template>
	<div class="menu-wrap">
		{{menuList}}
		<router-link to='/home'>home</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			menuList:Array
		},
		methods: {
			xxx() {
				
			}
		}
	}
</script>

<style>
	.menu-wrap {
		position: fixed;
		width: 180px;
		top: 40px;
		left: 0px;
		bottom: 0px;
		background-color: red;
	}
</style>