import request from '@/utils/request'

export default {
  // 根据手机号码发送短信
  getList(page) {
    return request({
      url: `/eduservice/teacherfront/page/${page}`,
      method: 'GET'
    })
  },
  getOne(id) {
    return request({
      url: `/eduservice/teacherfront/${id}`,
      method: 'GET'
    })
  }
}
