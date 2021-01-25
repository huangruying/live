import Vue from 'vue'
import axios from 'axios';

var $this = Vue.prototype;

let paramUrl = window.location.search.substr(1);
let paramStrs = paramUrl.split('&');
let params = {};
for(var index = 0; index < paramStrs.length; index++) {
  params[paramStrs[index].split('=')[0]] = paramStrs[index].split('=')[1];
}

 Vue.prototype.$src = 'http://121.196.179.31'; // AP环境
//  Vue.prototype.$src = '/api'; // AP环境
Vue.prototype.$ip = params.serverIp
Vue.prototype.$hardwareId=params.hardwareId
Vue.prototype.$port=params.port;
Vue.prototype.$deviceType=parseInt(params.deviceType || 31);

const service = axios.create({
  baseURL: $this.$src,
  timeout: 5000
});

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么

  config.data = JSON.stringify(config.data);
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response =>{
  // 对响应数据做点什么
  return response;
},
error =>{
  return Promise.reject(error);
});

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
