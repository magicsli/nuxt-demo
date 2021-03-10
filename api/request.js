import axios from "axios";

const request = axios.create({
  timeout: 10000,
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  responseType: "json"
});

request.interceptors.request.use(config => {
  config.headers = {
    token: "xxx"
  };
  return config;
});

request.interceptors.response.use(result => {
  result.data.testMsg = "xxxxxxxxxxxxxxxxxxx";

  return result;
});

export default request;
