
//import state from './states'

module.exports = {
	USER_LOGIN(state,playload){
		state.username = playload;
	},
	SIDEBAR_COLLAPSE(state,playload){
		state.sideBarIsCollapsed = playload;
	}
}
