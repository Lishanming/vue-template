import Vue from 'vue';

let MessageConstructor = Vue.extend(require('./main.vue'));
let instance;
let zIndex = 999;

//配置VUE默认服务，其参数是function
var Message = function(){
	
	if (Vue.prototype.$isServer) return;
	
	instance = new MessageConstructor({
		data: {}
	});
	console.log(instance);
	
	instance.vm = instance.$mount();
	console.log(instance.vm);
	
  	document.body.appendChild(instance.vm.$el);
  	
  	instance.vm.visible = true;
  	instance.dom = instance.vm.$el;
  	console.log(instance.vm.$el);
  	instance.dom.style.zIndex = zIndex++;
  	return instance.vm;
	
	
};



export default Message;