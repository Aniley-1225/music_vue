import request from '@/utils/request'

// 获取我喜欢信息
export const getILikeInfo = () => {
  return request({
    method: 'get',
    url: '/song/iLikeInfo'
  })
}
