
<template>
	<div class="header-wrap">
		<img class="header-logo" src="../../assets/images/logo.jpg" />
		<el-radio-group v-model="isCollapse" @change="change" style="margin-bottom: 20px;">
		  	<el-radio-button :label="false">展开</el-radio-button>
		  	<el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group>
	</div>
</template>

<script>
export default {
  data(){
    return {
    	isCollapse:false
    }
  },
  methods:{
  	change(){
  		this.$store.commit('SIDEBAR_COLLAPSE', this.isCollapse);
  	}
  }

}
</script>

<style lang="css">
	.header-wrap {
		position: fixed;
		width: 100%;
		height: 80px;
		/*background-color: rgba(0,0,0,0.3);*/
		border-bottom: 1px solid #d5d5d5;
	}
	.header-logo {
		height: 100%;
	}
</style>