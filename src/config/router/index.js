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
			name:'Home',
			path:'/home',
			component:require('../../views/home/home.vue'),
			children:[
				{path:'/home/user',component:require('../../views/user/user.vue')}
			]
		},
		{
			path:'/',
			redirect:'/login'	
		}
	]
})
