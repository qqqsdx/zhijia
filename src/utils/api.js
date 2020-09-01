import http from './http';

export function getcomClassList(params) {
  return http.get('/comclass',params)
}

// export function getRecommendList(params) {
//   return http.post('/home/recommend', params)
// }

