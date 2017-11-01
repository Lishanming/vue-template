
<template>
	<span>{{rollerNumber}}</span>
</template>

<script>
	export default {
		name:'funRoller',
		data(){
			return {
				rollerNumber:''
			}
		},
		props:{
			number:{
				default:''
			}
		},
		watch:{
			number(newVal,oldVal){
				console.log(newVal+"   "+oldVal);
				this.beginRoll(parseInt(newVal),parseInt(oldVal));
			}
		},
//		computed:{
//			this.rollerNumber = 
//		}
		methods: {
			beginRoll(newVal,oldVal){
				this.$nextTick(function () {
					let begin,end;
				
				//这里要做的，就是让数字呈现一个增长的动态效果，其实，就是数字在按x轴变化
				if (newVal > oldVal) {
					begin = oldVal;
					end = newVal;
				} else{
					end = oldVal;
					begin = newVal;
				}
				console.log(begin+"   "+end);
				//开始滚动
				for (let i = begin+1;i<=end;begin++) {
					this.rollerNumber = i;
				}
				});
				
			}
		}
	}
</script>

<style>

</style>