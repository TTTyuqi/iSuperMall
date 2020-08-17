import axios from 'axios'
//可以配置多个实例
const instance = axios.create({
  baseURL:'http://123.207.32.32:8000/',
  timeout:3000
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
},  (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
}, (error) =>{
  // 对响应错误做点什么
  return Promise.reject(error);
});

export { instance }
