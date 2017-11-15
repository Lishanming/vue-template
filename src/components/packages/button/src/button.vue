
<template>
	<button :disabled="disabled" class="fun-button"
		@click="handleClick"
	>
		<!--<i class="iconfont" :class="loadingIcon" v-if="loading"></i>-->
		<!--<img src="./loading.svg" v-if="loading"/>-->
		<img class="fun-button-loading" src="src/components/packages/button/src/loading.svg" v-if="loading" />
		<i class="iconfont" :class="actionIcon" v-if="actionIcon && !loading"></i>
		 <span><slot></slot></span>
	</button>
</template>

<script>
	import './button.css'
	export default {
		name:'epButton',
		props:{
			disabled:Boolean,
			actionIcon:String,
			loadingIcon:{
				type:String,
				default:'icon-load'
			},
			loading:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			handleClick(event) {
				this.$emit('click', event);
			}
		}
	}
</script>

<style>

</style>