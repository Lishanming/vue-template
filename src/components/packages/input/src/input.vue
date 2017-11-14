
<template>
  <div class="funInput-wrap">
      <label class="funInput-label" :class="{'funInput-label-active':inputActive}" :for="inputId">提示信息</label>
      <input :id="inputId" v-model="inputValue" @focus="onFocus" @blur="onBlur" class="funInput-text">
      <hr aria-hidden="true" class="funInput-hr-default">
      <hr aria-hidden="true" class="funInput-hr" :class="{'funInput-hr-active':inputActive}">
      <div class="funInput-message" v-show="isError">
      	必输项
      </div>
  </div>
</template>

<script>
	import './input.css'
	//let inputId = 0;
  export default {
		name:'funInput',
		data(){
			return {
				inputActive:false,
				isError:false,
				inputValue:'',
				inputId:new Date().getTime()
			}
		},
		props:{
			
		},
		methods: {
			onFocus(event) {
				this.inputActive = true;
			},
			onBlur(event) {
				if(this.inputValue.length == 0){
					this.inputActive = false;
				}
			}
		},mounted(){
			//this.inputId = new Date().getTime();
		}
	}
</script>

<style>
    
</style>
