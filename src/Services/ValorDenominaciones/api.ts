import HttpService from '../HttpService';

/**
 * class client services
 */
export class Api {
    /**
     * Login a client in app
     * @param {string} divisa
     * @returns {Promise<any>}
     */
    static async getValueToday(divisa: string): Promise<any> {
        const data = await HttpService.get<any>(`/${divisa}`);
        return data;
    }

    static async getValueByDate(date: any,divisa:string): Promise<any> {
        const data = await HttpService.get<any>(`/${divisa}/${'2010'}/${'10'}`);
        return data;
    }
}
