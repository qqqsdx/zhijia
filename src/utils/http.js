import axios from 'axios';
import qs from 'qs';
// 添加错误的轻提示
import { Toast } from 'vant';

// 可以使用自定义配置新建一个 axios 实例
var instance = axios.create({
  // 基础路径，相当于提出了公共部分
  // *********************************************************
  // *********************************************************
  // *********************************************************
  // *********************************************************
  baseURL: 'https://www.fastmock.site/mock/e070517c435df42105d146a489edcd0a/zhijia',
  // 超时事件，在规定的时间内，如果没有请求到数据，就不请求了，返回错误信息
  timeout: 10000,
  // // 同意添加请求头信息
  // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config就是请求的内容
  // const token = localStorage.getItem('token')
  // if (token) {
  //   config.params.token = token
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      // 请求的拦截
      instance.get(url, {
        params: params
      }) // 相应的拦截
      .then(res => {
        if (res) {
          resolve(res)
        } else {
          Toast(res.msg)
        }
      })
      .catch(err => {
        // console.log(err.message)
        Toast(err.message)
      })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      // 默认情况下axios会将参数转成字符串进行传递
      // 引入一个qs的包
      instance.post(url, qs.stringify(params))
      .then((res) => {
        if (res) {
          resolve(res)
        } else {
          Toast(res.msg)
        }
      })
      .catch((err) => {
        Toast(err.message)
      });
    })
  }
}

export default http;