import axios from 'axios';
const URL = 'http://192.168.29.235:5001/';
// const URL = 'http://192.168.29.250:3001/';
export const BASE_URL = URL;

const API = async config => {
  axios.interceptors.response.use(
    response => {
        console.log(response,'apissssss')
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: 'network error',
          status: 500,
        };
      }
      if (error.response.status === 401) {
        console.log('Unauthorised');
      }
      return Promise.reject(error);
    },
  );
  // console.log(config,'configggggg api')
  config.baseURL = URL;
  return axios(config);
};
export default API;