import { Env } from '../Environment/env';

import { handlerError } from './HandleError';
import { handleSuccess } from './HandleSuccess';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
  public readonly instance: AxiosInstance;
  public requestIntercept = async (config: AxiosRequestConfig) => {
    return config;
  };
  public readonly responseIntercept = (response: AxiosResponse<any>) => {
    return response;
  };

  public readonly responseErrorIntercept = (error: AxiosError) => {
    return Promise.reject(error);
  };

  constructor() {
    this.instance = axios.create({
      baseURL: Env.BaseUrl,
      timeout: 10000,
      maxRedirects: 5,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });

    this.instance.interceptors.request.use(this.requestIntercept);

    this.instance.interceptors.response.use(this.responseIntercept, this.responseErrorIntercept);
  }

  /**
   * Get http request
   * @param {string} route
   * @returns {Promise<any>}
   */
  public async get<T>(route: string, params?: any): Promise<any> {
    route = `${route}?apikey=${Env.auth}&formato=json`
    try {    
    const response = await this.instance.get<any>(route, { params });
      return handleSuccess(response);
    } catch (error:any) {
      return handlerError(error);
    }
  }
}

export default new HttpService();
