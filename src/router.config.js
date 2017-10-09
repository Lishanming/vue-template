
import Login from './components/Login.vue';
import Console from './components/Console.vue';

export default [
  {
    path:'/login',
    component:Login
  },{
    path:'/',
    redirect:'/login'
  },{
    path:'/console',
    component:Console
  }
];
