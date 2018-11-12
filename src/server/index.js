import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

let interceptor = function(response) {
    return response.data.data;
}
axios.interceptors.response.use(interceptor);

export const getTopic = function(params) {
    return axios.get('/topics', {
        params
    });
}

export const getTopicById = function(params) {
    return axios.get(`/topic/:${params}`);
}