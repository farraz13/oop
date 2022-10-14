import main, { rl } from '../main.js'
import Table from 'cli-table';
import dosen from '../models/dosen.js'
import dosenview from '../views/dosenview.js';
import indexview from '../views/indexview.js';

export default class controllerdosen {

    static menuDosen() {
        dosenview.menu()
        indexview.line();
        rl.question(`masukkan salah satu no. dari opsi diatas : `, (opsi) => {
            switch (opsi) {
                case '1':
                    controllerdosen.daftarDosen()
                    break;
                case '2':
                    controllerdosen.cariDosen()
                    break;
                case '3':
                    controllerdosen.tambahDosen()
                    break;
                case '4':
                    controllerdosen.hapusDosen()
                    break;
                case '5':
                    main.menuUtama()
                    break;
            }
        })
    }

    static daftarDosen() {
        dosen.read(function (err, data) {
            if (err) {
                console.log('gagal cari Dosen', err)
                process.exit(1)
            }
            const tableDosen = new Table({
                head: ['NIP', 'Nama Dosen']
                , colWidths: [10, 20]
            });
            data.forEach(item => {
                tableDosen.push([item.nip, item.nama])
            })
            console.log(tableDosen.toString())
            controllerdosen.menuDosen()
        })
    }

    static cariDosen() {
        rl.question('Masukkan Kode Dosen : ', (nip) => {
            dosen.search(nip, (err, data) => {
                if (err) {
                    console.log('gagal cari Dosen', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    controllerdosen.menuDosen()
                } else {
                    dosenview.detail(nip, data[0])
                    controllerdosen.menuDosen()
                }
            })
        })
    }

    static tambahDosen() {
        rl.question('masukkan nama dosen : ', (nama) => {
            rl.question('Masukkan Kode Dosen : ', (nip) => {
                dosen.add(nama, nip, (err) => {
                    if (err) {
                        console.log('gagal Tambah Dosen', err)
                        controllerdosen.tambahDosen()
                        process.exit(1)
                    } else {
                        console.log('dosen telah ditambahkan')
                        controllerdosen.daftarDosen()
                    }
                })
            })
        })
    }

    static hapusDosen() {
        rl.question('Masukkan Nama Dosen : ', (nip) => {
            dosen.remove(nip, (err) => {
                if (err) {
                    console.log('gagal hapus Dosen', err)
                    controllerdosen.menuDosen()
                }
                console.log('dosen telah di Hapus')
                controllerdosen.daftarDosen()
            })
        })
    }
}