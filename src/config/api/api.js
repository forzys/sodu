import {create} from 'apisauce'
import {header, timeout} from "./api.config";

const api = (baseUrl) => create({
    baseURL: baseUrl,
    timeout: timeout,
    headers: header
});

export default api