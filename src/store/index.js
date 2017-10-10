
/*
 * create by lishanming_ on 2017年10月10日 
 * */

import Vue form 'vue'
import Vuex form 'vuex'

//global states
import states from './states'

//global actions
import actions from './actions'

//global motations
import motations from './mutations'

//bind
Vue.use(Vuex);

export default new Vuex.Stroe({
	states,
	actions,
	mutations,
	modules:{
		
	}
});

