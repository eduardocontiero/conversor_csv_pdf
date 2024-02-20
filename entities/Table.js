class Table {
    constructor(items){
        this.header = items[0];
        items.shift();
        this.rows = items;
    }

    get rowCount(){
        return this.rows.length;
    }

    get columnCount(){
        return this.header.length;
    }
}

module.exports = Table;