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

    static async getValueAfterDate(divisa:string): Promise<any> {
        var myPastDate= new Date();
        myPastDate.setDate(myPastDate.getDate() - 10);//myPastDate is now 10 days in the past
        const data = await HttpService.get<any>(`/${divisa}/posteriores/${myPastDate.getFullYear()}/${myPastDate.getMonth()}/dias/${myPastDate.getDate()}`);
        return data;
    }
}
