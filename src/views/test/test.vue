
<template>
	<div class="">
		<input v-model="temp"  />
		<button @click="test">测试</button>
		<h1>
			<fun-Roller :number = "rollerNumber"></fun-Roller>
		</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				temp:'',
				rollerNumber:0
			};
		},
		methods: {
			test() {
				this.rollerNumber = this.temp;
				console.log(this.rollerNumber);
			}
		}
	}
</script>

<style>

</style>