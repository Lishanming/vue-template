
<template>
	<div :id="ehcartId"></div>
</template>

<script>
	var echarts = require('echarts');

	export default {
		name:'epEchart',
		props:{
			config:{
				type:Object,
				default:function(){
					return {
						theme:'default',
						event:{}
					}
				}
			},
			option:{
				type:Object
			}
		},
		watch:{
			config(newVal){
				this.refreshEchart();
			},
			option(newVal){
				this.refreshEchart();
			}
		},
		data(){
			return {
				echatInstance:null,
				ehcartId:new Date().getTime()
			};
		},
		methods: {
			refreshEchart(){
				this.echatInstance = echarts.init(this.$el)
				this.echatInstance.setOption(this.option);
				
				//屏幕大小调整，自动缩放大小
				window.onresize = function() {
		          chart.resize();
		        }
				
				//是否有绑定事件
				if(this.config.event){
					let _this = this
					Object.keys(this.config.event).forEach(function(value){
						_this.echatInstance.on(value,_this.config.event[value])
					})
				}
			}
		},
		mounted:function(){
			this.refreshEchart()
		}
	}
</script>

<style>

</style>