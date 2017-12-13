
<template>
	<div class="">
		
		
		<!--<h1>{{temp}}%</h1>
		<button @click="test">开始产生随机数(2s频率)</button>
		<h1>
			<fun-Roller :number = "temp"></fun-Roller>%
		</h1>-->
		
		<!--<div class="test-wrap">
			<epInput v-model="username" title="自定义标题"></epInput>
			<epInput v-model="username" title="自定义标题"></epInput>
			<epInput v-model="username" title="自定义标题"></epInput>
			<epInput v-model="username" title="自定义标题"></epInput>
			<epInput v-model="username" title="自定义标题"></epInput>
		</div>
		<button @click="test2">打印</button>
		<button @click="test3">赋值</button>-->
		
		<!--echarts封装-->
		<!--<ep-echart :config="echartConfig" :option="echartData" style="height: 600px;"></ep-echart>-->
		
		<!--message封装-->
		<ep-button class="login-btn"  @click="message">测试message</ep-button>
		
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				temp:'0',
				username:'',
				echartConfig:{
					event:{
						click:function(params){
							console.log(params.name);
						}
					}
				},
				echartData:{
				    title: {
				        text: 'ECharts 入门示例'
				    },
				    tooltip: {},
				    xAxis: {
				        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				    },
				    yAxis: {},
				    series: [{
				        name: '销量',
				        type: 'bar',
				        data: [5, 20, 36, 10, 10, 20]
				    }]
				}
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
			},
			message(){
				this.$message.info('我是一段文字提示消息我是一段文字提示消息我是一段文字提示消息')
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
	.login-btn {
	  	width: 100px;
	  	height: 40px;
	  	background-color: #16B8BD;
	  }
</style>