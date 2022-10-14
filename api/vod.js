import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/eduvod/vod/${vid}`,
      method: 'get'
    })
  }
}
