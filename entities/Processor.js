class Processor {

    static process(data){
        const splitRow = data.split("\r\n");
        const rows = [];

        splitRow.forEach(row => {
            const item = row.split(",");
            rows.push(item);
        })

        return rows;
    }
}

module.exports = Processor;