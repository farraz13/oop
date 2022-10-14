import {db} from '../main.js'

export default class matkul {
    static read(callback){
        db.all('select * from matkul', (err, data) => {
            callback(err, data)
        });
    }
    static add(nama, sks, id_matkul, callback){
        db.all('INSERT INTO matkul (nama, sks, id_matkul) VALUES(?, ?, ?)',[nama, sks, id_matkul], (err) => {
            callback(err)
        });
    }
    
    static search(id_matkul, callback){
        db.all('select * from matkul WHERE id_matkul = ?',[id_matkul], (err, data) => {
            callback(err, data)
        });
    }

    static remove(id_matkul, callback){
        db.run('DELETE FROM matkul WHERE id_matkul = ?', [id_matkul],(err) => {
            callback(err)
        });
    }
}