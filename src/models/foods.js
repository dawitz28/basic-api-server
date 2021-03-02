'ust strict';

class ThingsModel {
    constructor() {
this.id = 0;
this.db = [];
    }
//read -> app.get -> crud -> read
    get(id) {
        if (id) {
            return this.db.find(record => record.id ===id);
        } else {
            return this.db;
        }
    }

//create -> app.put
    create(obj) {
        let record = {
            id: ++this.id,
            record: obj
        }

        this.db.push(record);
        return record;
    }
//update -> app.post
    update(id,obj) {
        if (id) {
            return obj
        }
    }
//delete -> app.delete
    delete(id) {
        if (id) {
            return null;
        }
    }
}

module.exports = ThingsModel;

