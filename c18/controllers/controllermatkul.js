import main, { rl } from '../main.js'
import Table from 'cli-table';
import matkul from '../models/matkul.js'
import matkulview from '../views/matkulview.js';
import indexview from '../views/indexview.js';

export default class controllermatkul {

    static menuMatkul() {
        matkulview.menu()
        indexview.line();
        rl.question(`masukkan salah satu no. dari opsi diatas : `, (opsi) => {
            switch (opsi) {
                case '1':
                    controllermatkul.daftarMatkul()
                    break;
                case '2':
                    controllermatkul.cariMatkul()
                    break;
                case '3':
                    controllermatkul.tambahMatkul()
                    break;
                case '4':
                    controllermatkul.hapusMatkul()
                    break;
                case '5':
                    main.menuUtama()
                    break;
            }
        })
    }

    static daftarMatkul() {
        matkul.read(function (err, data) {
            if (err) {
                console.log('gagal cari Matkul', err)
                process.exit(1)
            }
            const tableMatkul = new Table({
                head: ['Id Matkul', 'Nama Matkul']
                , colWidths: [20, 30]
            });
            data.forEach(item => {
                tableMatkul.push([item.id_matkul, item.nama])
            })
            console.log(tableMatkul.toString())
            controllermatkul.menuMatkul()
        })
    }

    static cariMatkul() {
        rl.question('Masukkan Kode Matkul : ', (id_matkul) => {
            matkul.search(id_matkul, (err, data) => {
                if (err) {
                    console.log('gagal cari Matkul', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    controllermatkul.menuMatkul()
                } else {
                    matkulview.detail(id_matkul, data[0])
                    controllermatkul.menuMatkul()
                }
            })
        })
    }

    static tambahMatkul() {
        rl.question('masukkan nama matkul : ', (nama) => {
            rl.question('Masukkan Kode Matkul : ', (id_matkul) => {
                matkul.add(nama, id_matkul, (err) => {
                    if (err) {
                        console.log('gagal cari Matkul', err)
                        controllermatkul.tambahMatkul()
                        process.exit(1)
                    } else {
                        console.log('matkul telah ditambahkan')
                        controllermatkul.daftarMatkul()
                    }
                })
            })
        })
    }

    static hapusMatkul() {
        rl.question('Masukkan Nama Matkul : ', (id_matkul) => {
            matkul.remove(id_matkul, (err) => {
                if (err) {
                    console.log('gagal hapus Matkul', err)
                    controllermatkul.menuMatkul()
                }
                console.log('matkul telah di Hapus')
                controllermatkul.daftarMatkul()
            })
        })
    }
}