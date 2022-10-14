import request from '@/utils/request'
export default {
  getList(current, pageSize, courseQueryVo) {
    return request({
      url: `/eduservice/coursefront/${current}/${pageSize}`,
      method: 'POST',
      data: courseQueryVo
    })
  },
  getSubjcetList() {
    return request({
      url: `/eduservice/subject/`,
      method: 'GET'
    })
  },
  getById(id) {
    return request({
      url: `/eduservice/coursefront/${id}`,
      method: 'GET'
    })
  }
}
