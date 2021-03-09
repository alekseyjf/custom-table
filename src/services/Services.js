import defaultTable from './fixture/getDefaultTable.js'
import customTable from './fixture/getCustomTable.js'

class Services {
    constructor() {
        this.defaultTable = defaultTable;
        this.customTable = customTable;

        this.getDefaultTable = this.getDefaultTable.bind(this)
    }

    /**
     * @private
     * @param json
     * @return
     */
    async basePromise(json) {
        return await new Promise((resolve) => {
            setTimeout(() =>{
                resolve(json);
            }, 2000);
        });
    }

    async getDefaultTable(success) {
        const result = await this.basePromise(this.defaultTable);

        success(result);
        return result;
    }

    async getCustomTable(success) {
        const result = await this.basePromise(this.customTable);

        success(result);
        return result;
    }
}

export default Services;
