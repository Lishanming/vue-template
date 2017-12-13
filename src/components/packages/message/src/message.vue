
<template>
	<transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
		<div v-show="visible" class="ep-message-wrap animated">
			<img :src="typeImg" />
			<span style="margin-left: 5px;margin-right: 10px;">{{message}}</span>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				visible:false,
				message:'',
				type:'info',
				messageSvg:''
			};
		},
		computed: {
	      typeImg() {
	        return 'src/components/packages/message/src/assets/'+this.type+'.svg'
	      }
	    },
		methods: {
			xxx() {
				
			}
		}
	}
</script>

<style>
	
	.ep-message-wrap {
		position: absolute;
		min-width: 300px;
		height: 42px;
		line-height: 40px;
		top: 20px;
		left: 50%;
		border: 1px solid #D5D5D5;
		box-shadow: 1px 1px 4px #DDDDDD;
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
	}
</style>