import request from '@/utils/request'
export default {
  // 登录
  submitLogin(userInfo) {
    return request({
      url: `/uncenterservice/member`,
      method: 'POST',
      data: userInfo
    })
  },
  // 根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/uncenterservice/member`,
      method: 'GET'
      // headers: {'token': cookie.get('guli_token')}
    })
    // headers: {'token': cookie.get('guli_token')}
  }
}
