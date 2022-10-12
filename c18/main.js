import sqlite3 from 'sqlite3'
import readline from 'readline'
import indexview from './views/indexview'
import usercontroller from './controllers/usercontroller'

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
                    menuMahasiswa()
                    break;
                case '2':
                    menuJurusan()
                    break;
                case '3':
                    menuDosen()
                    break;
                case '4':
                    menuMataKuliah()
                    break;
                case '5':
                    menuKontrak()
                    break;
                case '6':
                    welcome()
                    break;
            }
        })
    }

    static run() {
        indexview.line()
        indexview.welcome()
        indexview.line()
        usercontroller.askUsername()
    }
}

main.run()