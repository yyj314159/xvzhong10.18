

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
 
import state from './state'
 
var mutations={
	add(a){
		a.count++
	},
	jian(a){
		a.count--
    },
    login(a,b){
        a.name=b
    }
}


var actions={
	add:({commit})=>commit("add"),
	jian:({commit})=>commit("jian"),
	login:({commit},b)=>commit("login",b)
}
 


export default new Vuex.Store({
	
	state,
	mutations,
	actions
	
})
