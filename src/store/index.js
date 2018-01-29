
/*
 * create by lishanming_ on 2017年10月10日 
 * */
import Vue from 'vue'
import Vuex from 'vuex'

//global states
import state from './states'

//global actions
import actions from './actions'

//global motations
import mutations from './mutations'

import * as getters from './getters'

//bind
Vue.use(Vuex);

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules:{
		
	}
});

