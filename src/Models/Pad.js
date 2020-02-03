const db = require('../db');

class Pad{
    
    find(path){
       let content = db.get(path).value();
       if(!!content){
        return {path, content};
       }
       return false;
    }

    save(pad){
        db.set(pad.path, pad.content).write();
        return pad;
    }
}

module.exports = Pad