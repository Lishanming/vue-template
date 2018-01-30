
<template>
	<div class="menu-wrap">
		<el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true" :collapse="isCollapse" style="height: 100%;">
		  <el-submenu index="1">
		    <template slot="title">
		      <i class="el-icon-location"></i>
		      <span slot="title">权限模块</span>
		    </template>
		    <!--<el-menu-item-group>
		      <span slot="title">分组一</span>-->
		      <el-menu-item index="/home/user">
		      	用户管理
		      	<!--<router-link to="/home/user">用户管理</router-link>-->
		      </el-menu-item>
		      <el-menu-item index="1-2">选项2</el-menu-item>
		    <!--</el-menu-item-group>-->
		    <!--<el-menu-item-group title="分组2">-->
		      <el-menu-item index="1-3">选项3</el-menu-item>
		    <!--</el-menu-item-group>-->
		   
		  </el-submenu>
		  <el-menu-item index="2">
		    <i class="el-icon-menu"></i>
		    <span slot="title">导航二</span>
		  </el-menu-item>
		  <el-menu-item index="3">
		    <i class="el-icon-setting"></i>
		    <span slot="title">导航三</span>
		  </el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				message:'6666666666666666666666'
			};
		},
		props:{
			menuList:Array
		},
		computed: mapGetters({
		    isCollapse: 'sideBarIsCollapsed'
		}),
		methods: {
			xxx() {
				
			}
		},
		mounted(){
			this.message = this.$store.state.username;
		}
	}
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
    	width: 180px;
  	}
	.menu-wrap {
		position: absolute;
		top: 40px;
		left: 0px;
		bottom: 0px;
		background-color: #fff;
	}
</style>