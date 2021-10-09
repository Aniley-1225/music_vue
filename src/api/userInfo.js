import request from '@/utils/request'

// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: '/my/userInfo'
  })
}

// 修改用户基本信息
export const editUserInfo = data => {
  return request({
    method: 'post',
    url: '/my/userinfo',
    data
  })
}

// 修改用户密码
export const editPassword = data => {
  return request({
    method: 'post',
    url: '/my/updatepwd',
    data
  })
}

// 修改用户头像
export const editAvatar = data => {
  return request({
    method: 'post',
    url: '/my/update/avatar',
    data
  })
}
