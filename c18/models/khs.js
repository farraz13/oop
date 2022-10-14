import {db} from '../main.js'

export default class khs {
    static read(callback){
        db.all('select * from khs', (err, data) => {
            callback(err, data)
        });
    }
    static add(nama, alamat, jurusan, nim,  callback){
        db.all('INSERT INTO khs (nim, id_jurusan, id_matkul, nilai) VALUES(?, ?, ?, ?)',[nim, id_jurusan, id_matkul, nilai], (err) => {
            callback(err)
        });
    }
    
    static search(nim, callback){
        db.all('select * from khs WHERE nim = ?',[nim], (err, data) => {
            callback(err, data)
        });
    }

    static remove(nim, callback){
        db.run('DELETE FROM khs WHERE nim = ?', [nim],(err) => {
            callback(err)
        });
    }
}