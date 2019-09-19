// 统一状态码处理
let statusJson = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求地址出错',
  408: '请求超时',
  500: '服务器正在维护, 请稍后再试',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}
function sStateManagementErr (status, _this) {
  status = status - 0
  let errTip = statusJson[statusJson] ? statusJson[statusJson] : 'concatUs'
  // 1.跳转错误页面, 通过参数判断, 在页面拼接状态码图片
  // _this.$router.push({
  //   path: `/Notfind/`,
  //   query: {
  //     status: `${status}`
  //   }
  // })
  // 2.弹窗提示
  alert(errTip)
  // 根据需求, return错误
  // return errTip
}

export const stateManagementErr = sStateManagementErr
