
<template>
	<div class="">
		<!--<h1>{{temp}}%</h1>
		<button @click="test">开始产生随机数(2s频率)</button>
		<h1>
			<fun-Roller :number = "temp"></fun-Roller>%
		</h1>-->
		<div class="test-wrap">
			<funInput v-model="username" title="自定义标题"></funInput>
			<funInput v-model="username" title="自定义标题"></funInput>
			<funInput v-model="username" title="自定义标题"></funInput>
			<funInput v-model="username" title="自定义标题"></funInput>
			<funInput v-model="username" title="自定义标题"></funInput>
			
		</div>
		<button @click="test2">打印</button>
		<button @click="test3">赋值</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				temp:'0',
				username:''
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
	input:disabled {
		background-color: inherit;
		color: rgba(0, 0, 0, 0.3);;
	}
</style>