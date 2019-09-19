import { _this } from '@/main.js'
import Axios from 'axios'
import { baseURL } from './baseURL.js'
import { stateManagementErr } from './stateManagementErr.js'

// loading配置
let options = {
  lock: true,
  text: '正在加载...',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
}
// loading显示判断
let loadingFlag

// 接口基础配置
const config = {
  method: 'get', // 默认get请求
  baseURL: baseURL, // 基础路径
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {}, // 默认参数
  timeout: 10000, // 请求超时
  responseType: 'json' // 返回数据类型
}

// request 拦截
Axios.interceptors.request.use(config => {
  console.log('request_ok', config)
  // 开启加载动画
  loadingFlag = _this.$loading(options)
  // token无值处理
  // if (!window.sessionStorage.token) {
  //   alert('未登录操作')
  // }
  return config
}, err => {
  console.log('request_no', err)
  // 1.关闭动画
  loadingFlag.close()
  confirm.log('request_err', err)
  // 2.判断请求超时 ? 未做验证
  if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
    console.log('请求超时')
    // return service.request(originalRequest) // 例如再重复请求一次?
  }
  // 3.重定向
  const errorInfo = err.response
  if (errorInfo) {
    // 状态码
    const errorStatus = errorInfo.status
    // 跳转错误页面, 通过参数判断显示
    _this.$router.push({
      path: `/error/`,
      query: {
        status: `${errorStatus}`
      }
    })
    // 也可以根据状态码, 跳转到响应错误页面, 因状态码变化, 不建议使用此方式
    // _this.$router.push({
    //   path: `/error/${errorStatus}`
    // })
  }
  return Promise.reject(err)
})

// response 拦截
Axios.interceptors.response.use(response => {
  console.log('response_ok', response)
  loadingFlag.close()
  // IE9时response.data是undefined
  let data = response.data === undefined ? response.request.responseText : response.data
  // 根据 data.code 值来做不同的处理
  // switch...
  return data
}, err => {
  console.log('response_no', err)
  loadingFlag.close()
  // 错误处理
  if (err && err.response) {
    stateManagementErr(err.response.status, _this)
  }
  return Promise.reject(err)
})

// urlType: type: str/number; 默认1, 调用本域下接口; 2 非本域;
function GetAxios ({ url, data = config.data, urlType = 1 }) {
  var token = window.sessionStorage.token // token可能会过期, 每次获取可方便后续操作
  let needUrl = (urlType - 0 === 1 ? config.baseURL + url : url)
  return Axios.get(needUrl, { params: data, headers: { 'Authorization': token } }).then((res) => {
    console.log('fn', res)
    return res.data
  }).catch((err) => {
    console.log('fn', err)
    return err
  })
}

function PostAxios ({ url, data = config.data, urlType = 1 }) {
  var token = window.sessionStorage.token
  let needUrl = (urlType - 0 === 1 ? config.baseURL + url : url)
  return Axios.post(needUrl, data, { headers: { 'Authorization': token } }).then((res) => {
    console.log('fn', res)
    return res.data
  }).catch((err) => {
    console.log('fn', err)
    return err
  })
}

export { GetAxios, PostAxios }
