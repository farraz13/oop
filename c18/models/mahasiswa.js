import {db} from '../main.js'

export default class mahasiswa {
    static read(callback){
        db.all('select * from mahasiswa', (err, data) => {
            callback(err, data)
        });
    }
    static add(nama, alamat, jurusan, nim,  callback){
        db.all('INSERT INTO mahasiswa (nama, alamat, jurusan, nim) VALUES(?, ?, ?, ?)',[nama, alamat, jurusan, nim], (err) => {
            callback(err)
        });
    }
    
    static search(nim, callback){
        db.all('select * from mahasiswa WHERE nim = ?',[nim], (err, data) => {
            callback(err, data)
        });
    }

    static remove(nim, callback){
        db.run('DELETE FROM mahasiswa WHERE nim = ?', [nim],(err) => {
            callback(err)
        });
    }
}