import axios from 'axios';
import * as config  from './../constant/Config';

const x_rapidapi_host = "google-translate1.p.rapidapi.com";
const x_rapidapi_key = "8918f274c7msh89d3b537ca536b1p1367b7jsn0d31b220c15c";
const accept_encoding = "application/javascript";
const content_type = "application/x-www-form-urlencoded";
const useQueryString = "true";
export default function callApi(method = 'POST', body) {
    return axios({
        method: method,
        url: `${config.API_URL}`,
        data: body,
        headers: {
            'x-rapidapi-host' : x_rapidapi_host,
            'x-rapidapi-key': x_rapidapi_key,
            'accept-encoding': accept_encoding,
            'content-type': content_type,
            'useQueryString': useQueryString
        }
    }).catch(err => {
        console.log(err);
    });
}