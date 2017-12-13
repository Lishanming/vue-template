/*
 * author lishanming_
 * email 674548322@qq.com
 */

import epEchart from './src/echart.vue'

epEchart.install = function(Vue){
	Vue.component(epEchart.name,epEchart);
}

export default epEchart;



