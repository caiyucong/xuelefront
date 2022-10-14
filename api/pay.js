import request from '@/utils/request'
export default {
  createNative(courseId) {
    return request({
      url: `/orderservice/pay-log/${courseId}`,
      method: 'GET'
    })
  },
  queryPayStatus(orderId) {
    return request({
      url: `/orderservice/pay-log/status/${orderId}`,
      method: 'GET'
    })
  }
}
