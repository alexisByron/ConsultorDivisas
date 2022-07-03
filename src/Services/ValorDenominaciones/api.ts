import HttpService from '../HttpService';

/**
 * class Api to get data
 */
export class Api {
    /**
     * get current value of a exchange
     * @param {string} divisa
     * @returns {Promise<any>}
     */
    static async getValueToday(divisa: string): Promise<any> {
        const data = await HttpService.get<any>(`/${divisa}`);
        return data;
    }

    /**
     * get values of a exchange only in the month
     * @param {string} divisa
     * @returns {Promise<any>}
     */
    static async getValueByDate(divisa: string): Promise<any> {
        let today = new Date();
        const data = await HttpService.get<any>(`/${divisa}/${today.getFullYear()}/${today.getMonth()}`);
        return data;
    }

    /**
    * get values of a exchange from last 10 days
    * @param {string} divisa
    * @returns {Promise<any>}
    */
    static async getValueAfterDate(divisa: string): Promise<any> {
        var myPastDate = new Date();
        divisa !== 'ipc' && divisa !== 'utm' ? myPastDate.setDate(myPastDate.getDate() - 10) : null;//myPastDate is now 10 days in the past
        const routeLast10Days = `/${divisa}/posteriores/${myPastDate.getFullYear()}/${myPastDate.getMonth() + 1}/dias/${myPastDate.getDate()}`
        const routeYear = `/${divisa}/posteriores/${myPastDate.getFullYear() - 1}/01`
        const data = await HttpService.get<any>(divisa === 'ipc' || divisa === 'utm' ? routeYear : routeLast10Days);
        return data;
    }
}
