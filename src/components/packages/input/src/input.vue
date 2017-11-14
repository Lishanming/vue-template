
<template>
  <div class="funInput-wrap">
      <label class="funInput-label" :class="{'funInput-label-active':inputActive}" :for="inputId">提示信息</label>
      <input :id="inputId" v-model="inputValue" @input="handleInput" @focus="onFocus" @blur="onBlur" class="funInput-text">
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
			value: [String, Number]
		},
		watch: {
      'value'(newVal, oldVal) {
      	console.log('组件内部值监控器触发了！！！');
        this.setCurrentValue(newVal);
      }
    },
		methods: {
			onFocus(event) {
				this.inputActive = true;
			},
			onBlur(event) {
				if(this.inputValue.length == 0){
					this.inputActive = false;
				}
			},
			handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
      },
      setCurrentValue(val) {
      	this.inputValue = val;
      }
		},mounted(){
			//this.inputId = new Date().getTime();
			if(this.value != undefined && this.value.length > 0){
				this.setCurrentValue(this.value);
				this.inputActive = true;
			}
		}
	}
</script>

<style>
    
</style>
