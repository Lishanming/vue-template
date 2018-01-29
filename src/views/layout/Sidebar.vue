
<template>
	<div class="menu-wrap">
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
		  <el-submenu index="1">
		    <template slot="title">
		      <i class="el-icon-location"></i>
		      <span slot="title">导航一</span>
		    </template>
		    <el-menu-item-group>
		      <span slot="title">分组一</span>
		      <el-menu-item index="1-1">选项1</el-menu-item>
		      <el-menu-item index="1-2">选项2</el-menu-item>
		    </el-menu-item-group>
		    <el-menu-item-group title="分组2">
		      <el-menu-item index="1-3">选项3</el-menu-item>
		    </el-menu-item-group>
		    <el-submenu index="1-4">
		      <span slot="title">选项4</span>
		      <el-menu-item index="1-4-1">选项1</el-menu-item>
		    </el-submenu>
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
	.menu-wrap {
		position: absolute;
		width: 180px;
		top: 80px;
		left: 0px;
		bottom: 0px;
		background-color: #eef1f6;
	}
</style>