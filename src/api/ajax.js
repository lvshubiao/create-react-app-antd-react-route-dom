//引入axios
import axios from 'axios'
let cancel ,promiseArr = {}
// import config from '../../../config';
var instance = axios.create();
//请求拦截器
instance.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
      return config
}, error => {
    return Promise.reject(error)
})
//响应拦截器即异常处理
instance.interceptors.response.use(response => {
    return response
}, error => {
  return error
  }
 )
 instance.defaults.baseURL = 'http://172.16.8.28:10190';
//设置默认请求头
instance.defaults.headers = {
  'appkey': 'd776212a6322899972b1e08023a8dac6'
}
instance.defaults.timeout = 10000

export default {
  //get请求
    get (url,param) {
      return new Promise((resolve,reject) => {
        instance({
          method: 'get',
          url,
          params: param
        }).then(res => {
          resolve(res)
        },err=>{
            reject(err)
        })
      })
    },
  //post请求
    post (url,param) {
      return new Promise((resolve,reject) => {
        instance({
          method: 'post',
          url,
          data: param
        }).then(res => {
          resolve(res)
        },err=>{
            reject(err)
        })
      })
     }
  }