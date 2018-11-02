import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
		account:{
			state:{
				provinces: []
			},
			mutations:{
				provinces(state, payload){
					state.provinces = payload
				}
			},
			actions:{
				provinces(state, payload){
					state.commit('provinces', payload)
				}
			},
			getters:{
				provinces(state){
					return state.provinces
				}
			}
		}
    }
  })

  return Store
}
