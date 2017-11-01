
<template>
	<div class="">
		<h1>{{temp}}%</h1>
		<button @click="test">开始产生随机数(2s频率)</button>
		<h1>
			<fun-Roller :number = "temp"></fun-Roller>%
		</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				temp:'0'
			};
		},
		methods: {
			test() {
				let _this = this;
				setInterval(function(){
					_this.temp = parseInt(Math.random()*(100+1),10);
				},2000);
			}
		}
	}
</script>

<style>

</style>