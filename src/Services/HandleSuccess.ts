import { AxiosResponse } from 'axios';
/**
 * @param {AxiosError} error
 * @returns {any}
 */
export const handleSuccess = <T>(response: AxiosResponse<any>):any => {
  return response.data;
};
