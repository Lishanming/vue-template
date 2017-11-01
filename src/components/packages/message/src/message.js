import Vue from 'vue';

let MessageConstructor = Vue.extend(require('./message.vue'));
let instance;
let zIndex = 999;

//配置VUE默认服务，其参数是function
var Message = function(options){
	
	//console.log(type+'  '+message);
	
	if (Vue.prototype.$isServer) return;
	
	options = options || {};
  	if (typeof options === 'string') {
    	options = {
      		message: options
    	};
  	}
	
	instance = new MessageConstructor({
		data: options
	});
	//console.log(instance);
	
	instance.vm = instance.$mount();
	//console.log(instance.vm);
	
  	document.body.appendChild(instance.vm.$el);
  	
  	instance.vm.visible = true;
  	instance.dom = instance.vm.$el;
  	//console.log(instance.vm.$el);
  	console.log(zIndex);
  	instance.dom.style.zIndex = zIndex++;
  	return instance.vm;
	
	
};
//var messageBox = {};
//
//messageBox.info = message => Message('info',message);
//messageBox.warn = message => Message('warn',message);

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});



export default Message;