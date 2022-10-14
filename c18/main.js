import sqlite3 from 'sqlite3'
import readline from 'readline'
import indexview from './views/indexview.js'
import usercontroller from './controllers/usercontroller.js'
import controllerjurusan from './controllers/controllerjurusan.js'
import controllermahasiswa from './controllers/controllermahasiswa.js'
import controllerdosen from './controllers/controllerdosen.js'
import controllermatkul from './controllers/controllermatkul.js'
import controllerkhs from './controllers/controllerkhs.js'

export const db = new sqlite3.Database('university.db', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log('gagal terhubung dengan database', err)
    }
})

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export default class main {
    static menuUtama() {
        indexview.line()
        indexview.menuUtama()
        indexview.line();
        rl.question(`masukkan salah satu no. dari opsi diatas :`, (opsi) => {
            switch (opsi) {
                case '1':
                   controllermahasiswa.menuMahasiswa()
                    break;
                case '2':
                    controllerjurusan.menuJurusan()
                    break;
                case '3':
                    controllerdosen.menuDosen()
                    break;
                case '4':
                    controllermatkul.menuMatkul()
                    break;
                case '5':
                    controllerkhs.menuKhs()
                    break;
                case '6':
                    main.login()
            }
        })
    }

    static login() {
        indexview.line()
        indexview.welcome()
        indexview.line()
        usercontroller.askUsername()
    }
}

main.login()