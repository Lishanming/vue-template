import Login from './components/login.vue';
import Wrap from './components/wrap.vue';
import Home from './views/home/home.vue'
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
			}
		]
	},
	{
		path: '/test',
		component: Test
	}
];