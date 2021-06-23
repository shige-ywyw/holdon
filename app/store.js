const fs = require('fs');

class ArrayStore {
    constructor(file, maxLength=5){
        this.file = file;
        this.data = [];
        this.maxLength = maxLength;
        this.load();
    }

    delete(data) {
        this.data = [...this.data.filter(v => v.data != data.data)]
        this.save()
    }

    push(data) {
        this.data = [data, ...this.data.filter(v => v.data != data.data)];
        this.save()
    }

    load() {
        try {
            const rawdata = fs.readFileSync(this.file, {encoding:'utf-8'});
            this.data = JSON.parse(rawdata);
        } catch(error) {
            console.log(error);
        }
        return this.data;
    }
 
    save() {
        const jsondata = JSON.stringify(this.data.slice(0, this.maxLength));
        fs.writeFileSync(this.file, jsondata);
    }
}

exports.ArrayStore = ArrayStore;