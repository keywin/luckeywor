import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// 注册vuex
Vue.use(Vuex)

// 状态
const state = {
    userInfo: JSON.parse(sessionStorage.getItem('userinfo')),
    userList: []
}

// 修改 state 状态
const mutations = {
    // 保存用户信息
    SAVE_USERINFO (state, data) {
        sessionStorage.setItem('userinfo', JSON.stringify(data))
        state.userInfo = data
    },
    GET_USERLIST (state, data) {
        state.userList = data
    }
}

// 定义actions 异步  主要是提交commit mutations 由 mutations改变状态
const actions = {
    GET_USERLIST ({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('/api/datalist').then((res) => {
                commit('GET_USERLIST', res.data.data)
                resolve()
            })
        })
    }
}

// 定义全局共享属性 getters
const getters = {
    filterUserList: state => state.userList.filter(v => v.rate - 0 > 8)
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
