import http from './http';
//首页分类小图标
export function getcomClassList(params) {
  return http.get('/comclass',params)
}

// export function getRecommendList(params) {
//   return http.post('/home/recommend', params)
// }

// 登录
export function userlogin(params) {
  return http.post('/register', params)
}

