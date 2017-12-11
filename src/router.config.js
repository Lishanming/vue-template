import Login from './views/auth/login.vue';
import Wrap from './views/layout/wrap.vue';
import Home from './views/home/home.vue'
import Home2 from './views/home/home2.vue'
import Test from './views/test/test.vue'

export default [{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/app',
		component: Wrap,
		children: [
			{
				name: 'home',
				path: '/home',
				meta: {},
				component:Home
			},
			{
				name: 'home2',
				path: '/home2',
				meta: {},
				component:Home2
			}
		]
	},
	{
		path: '/test',
		component: Test
	}
];