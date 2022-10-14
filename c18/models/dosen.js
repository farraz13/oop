import {db} from '../main.js'

export default class dosen {
    static read(callback){
        db.all('select * from dosen', (err, data) => {
            callback(err, data)
        });
    }
    static add(nama, nip, callback){
        db.all('INSERT INTO dosen (nama, nip) VALUES(?, ?)',[nama, nip], (err) => {
            callback(err)
        });
    }
    
    static search(nip, callback){
        db.all('select * from dosen WHERE nip = ?',[nip], (err, data) => {
            callback(err, data)
        });
    }

    static remove(nip, callback){
        db.run('DELETE FROM dosen WHERE nip = ?', [nip],(err) => {
            callback(err)
        });
    }
}