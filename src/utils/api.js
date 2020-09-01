import http from './http';

// 登录
export function userlogin(params) {
  return http.post('/register', params)
}

