import { AxiosError } from 'axios';
import { EHttpStatus } from './EHttpStatus';

/**
 * @param {AxiosError} error
 * @returns {IResponse<T>}
 */
export const handlerError = <T>(error: AxiosError): any => {
    const objectResponse = undefined as any;
    const defultResponse: any = {
        count: 0,
        statusCode: EHttpStatus.InvalidRequest,
        message: 'Error realizando la consulta',
        payload: objectResponse,
    };
    switch (error.response?.status) {
        case EHttpStatus.NotFound:
            defultResponse.message = 'Aun no se ha cargado informacion de este dia, intente nuevamente';
            defultResponse.statusCode = EHttpStatus.NotFound;
            return defultResponse
        default:
            break;
    }
    if (!error.response?.data) {
        return defultResponse;
    }
    return error.response.data as any;
};
