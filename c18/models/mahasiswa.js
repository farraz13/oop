import {db} from '../main.js'

export default class jurusan {
    static read(callback){
        db.all('select * from jurusan', (err, data) => {
            callback(err, data)
        });
    }
    static add(nim, nama, callback){
        db.all('INSERT INTO jurusan (nama_jurusan, id_jurusan) VALUES(?, ?)',[nim, nama], (err) => {
            callback(err)
        });
    }
    
    static search(id, callback){
        db.all('select * from jurusan WHERE id_jurusan = ?',[id], (err, data) => {
            callback(err, data)
        });
    }

    static remove(id_jurusan, callback){
        db.run('DELETE FROM jurusan WHERE id_jurusan = ?', [id_jurusan],(err) => {
            callback(err)
        });
    }
}