/*
 * author lishanming_
 * email 674548322@qq.com
 */

import funButton from './button/index'
import epEchart from './echart/index'
import Message from './message/index'
import epRoller from './roller/index'
import epInput from './input/index'


const components = [
	funButton,
	epEchart,
	epRoller,
	epInput
];

const install = function(Vue) {
	
  /* istanbul ignore if */
  //if (install.installed) return;
  
  components.map(component => {
    Vue.component(component.name, component);
  });

//Vue.use(Loading.directive);
//
//Vue.prototype.$loading = Loading.service;
//Vue.prototype.$msgbox = MessageBox;
//Vue.prototype.$alert = MessageBox.alert;
//Vue.prototype.$confirm = MessageBox.confirm;
//Vue.prototype.$prompt = MessageBox.prompt;
//Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
};

export default install;
