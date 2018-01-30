
<template>
	<div class="header-wrap">
		<img class="header-logo" src="../../assets/images/logo.jpg" />
		<el-radio-group v-model="isCollapse" @change="change" style="margin-bottom: 20px;">
		  	<el-radio-button :label="false">展开</el-radio-button>
		  	<el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group>
		<div class="header-option">
			<el-dropdown>
			  <span class="el-dropdown-link">
			    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>黄金糕</el-dropdown-item>
			    <el-dropdown-item>狮子头</el-dropdown-item>
			    <el-dropdown-item>螺蛳粉</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
	  	data(){
	    	return {
	    		isCollapse:false
	    	}
	  	},
	  	computed: mapGetters({
		    username: 'username'
		}),
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
		height: 40px;
		/*background-color: rgba(0,0,0,0.3);*/
		border-bottom: 1px solid #d5d5d5;
	}
	.header-logo {
		height: 100%;
	}
	.header-option {
		position: absolute;
		top: 0px;
		right: 20px;
	}
</style>