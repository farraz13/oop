import {db} from '../main.js'



export default class jurusan {
    static read(callback){
        db.all('select * from jurusan', (err, data) => {
            callback(err, data)
        });
    }
    static add(id, nama, callback){
        db.all('INSERT INTO jurusan VALUES(?, ?)',[id, nama], (err) => {
            callback(err)
        });
    }
    static add(){
        db.all('select * from jurusan', (err, data) => {
            callback(err, data)
        });
    }

    static search(){
        db.all('select * from jurusan', (err, data) => {
            callback(err, data)
        });
    }

    static remove(){
        db.all('select * from jurusan', (err, data) => {
            callback(err, data)
        });
    }
}