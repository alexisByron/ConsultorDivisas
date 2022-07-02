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

    static async getValueByDate(divisa:string): Promise<any> {
        let today = new Date();
        console.log(today.getFullYear());
        const data = await HttpService.get<any>(`/${divisa}/${today.getFullYear()}/${today.getMonth()}`);
        return data;
    }
}
