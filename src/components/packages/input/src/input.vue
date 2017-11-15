
<template>
  <div class="epInput-wrap">
      <label class="epInput-label" :class="{'epInput-label-active':isFocused||notEmpty}" :for="inputId">{{title}}</label>
      <input :id="inputId" class="epInput-text" v-model="inputValue" 
      	@input="handleInput"
      	@focus="onFocus"
      	:disabled="disabled" 
      	@blur="onBlur">
      <hr aria-hidden="true" class="epInput-hr-default">
      <hr aria-hidden="true" class="epInput-hr" :class="{'epInput-hr-active':isFocused}">
      <div class="epInput-message" v-show="isError">
      	{{message}}
      </div>
  </div>
</template>

<script>
	import './input.css'
  export default {
		name:'epInput',
		data(){
			return {
				isFocused:false,
				isError:false,
				inputValue:'',
				inputId:new Date().getTime(),
				message:''
			}
		},
		props:{
			value: [String, Number],
			title:String,
			disabled:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			notEmpty(){
				return this.value != undefined && this.value.length > 0;
			}
		},
		watch: {
      'value'(newVal, oldVal) {
        this.setCurrentValue(newVal);
      }
    },
		methods: {
			onFocus(event) {
				this.isFocused = true;
			},
			onBlur(event) {
					this.isFocused = false;
			},
			handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
      },
      setCurrentValue(val) {
      	this.inputValue = val;
      }
		},mounted(){
			if(this.notEmpty){
				this.setCurrentValue(this.value);
			}
		}
	}
</script>

<style>
    
</style>
