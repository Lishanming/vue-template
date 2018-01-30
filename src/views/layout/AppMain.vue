
<template>
	<div class="main-wrap" :class="{'main-wrap-bigger':isCollapse}">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed: mapGetters({
		    isCollapse: 'sideBarIsCollapsed'
		}),
		methods: {
			xxx() {
				
			}
		}
	}
</script>

<style>
	.main-wrap {
		position: absolute;
		top: 40px;
		left: 180px;
		right: 0px;
		padding: 20px;
		transition: left .3s;
	}
	.main-wrap-bigger {
		left: 64px;
	}
</style>