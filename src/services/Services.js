import defaultTable from './fixture/getDefaultTable.js'
import customTable from './fixture/getCustomTable.js'

class Services {
    constructor() {
        this.defaultTable = defaultTable;
        this.customTable = customTable;

        this.getDefaultTable = this.getDefaultTable.bind(this)
    }

    async getDefaultTable(success) {
        const result = await new Promise((resolve) => {
            setTimeout(() =>{
                resolve(this.defaultTable);
            }, 2000);
        });

        success(result);
        return result;
    }
    getCustomTable() {

    }
}

export default Services;
