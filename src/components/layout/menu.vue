
<template>
	<div class="menu-wrap">
		{{menuList}}
		{{message}}
		<router-link to='/home'>home</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message:'6666666666666666666666'
			};
		},
		props:{
			menuList:Array
		},
		methods: {
			xxx() {
				
			}
		},
		mounted(){
			this.message = this.$store.state.username;
			console.log(this.$store.state.username);
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