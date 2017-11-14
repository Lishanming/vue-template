
<template>
	<div class="">
		<!--<h1>{{temp}}%</h1>
		<button @click="test">开始产生随机数(2s频率)</button>
		<h1>
			<fun-Roller :number = "temp"></fun-Roller>%
		</h1>-->
		<div class="test-wrap">
			<funInput v-model="username"></funInput>
			<button @click="test2">打印</button>
			<button @click="test3">赋值</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				temp:'0',
				username:'hello world'
			};
		},
		methods: {
			test() {
				let _this = this;
				setInterval(function(){
					_this.temp = parseInt(Math.random()*(100+1),10);
				},2000);
			},
			test2() {
				console.log(this.username);
			},
			test3() {
				this.username = new Date().getTime();
			}
		}
	}
</script>

<style>
	.test-wrap {
		margin: 100px;
		height: 300px;
		width: 300px;
		background-color: #FFFFFF;
	}
</style>