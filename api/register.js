import request from '@/utils/request'

export default {
  // 根据手机号码发送短信
  getMobile(mobile) {
    return request({
      url: `/smsservice/sms/${mobile}`,
      method: 'GET'
    })
  },
  // 用户注册
  submitRegister(formItem) {
    return request({
      url: `/uncenterservice/member`,
      method: 'PUT',
      data: formItem
    })
  },
  // 检查手机是否存在
  checkPhone(phone) {
    return request({
      url: `/uncenterservice/member/${phone}`,
      method: 'GET'
    })
  }
}
