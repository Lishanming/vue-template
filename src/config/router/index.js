import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default new VueRouter({
	mode:'hash',
	lingActiveClass:'is-active',
	scrollBehavior: () => ({ y: 0 }),
	routes:[
		{
			name:'Login',
			path:'/login',
			component:require('../../views/auth/login.vue')
		},
		{
			name:'App',
			path:'/home',
			component:require('../../views/home/home.vue')
		},
		{
			path:'/',
			redirect:'/login'	
		}
	]
})
