import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 状态
const state = {
	userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
	datalist: []
}

// mutations 操作state
const mutations = {
	// 保存用户数据
	SAVE_USERINFO (state, userInfo) {
		sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
		state.userInfo = userInfo
	},
	// 获取全局用户列表数据
	GET_GLOBALDATALIST (state, datalist) {
		state.datalist = datalist
	}
}

// actions 异步的 commit mutations 来改变状态
const actions = {
	GET_GLOBALDATALIST ({ commit }) {
		return new Promise((respons, reject) => {
			axios.post('/api/datalist', {
				id: state.userInfo.id
			}).then(res => {
				if (res.data.status) {
					commit('GET_GLOBALDATALIST', res.data.data)
					respons()
				}
			})
		})
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
