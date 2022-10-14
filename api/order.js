import request from '@/utils/request'
export default {
  saveOrder(courseId) {
    return request({
      url: `/orderservice/order/${courseId}`,
      method: 'POST'
    })
  },
  getInfo(orderId) {
    return request({
      url: `/orderservice/order/${orderId}`,
      method: 'GET'
    })
  }
}
