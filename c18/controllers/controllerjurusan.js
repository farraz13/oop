import main, { rl } from '../main.js'
import Table from 'cli-table';
import jurusan from '../models/jurusan.js'
import jurusanview from '../views/jurusanview.js';
import indexview from '../views/indexview.js';

export default class controllerjurusan {

    static menuJurusan() {
        jurusanview.menu()
        indexview.line();
        rl.question(`masukkan salah satu no. dari opsi diatas : `, (opsi) => {
            switch (opsi) {
                case '1':
                    controllerjurusan.daftarJurusan()
                    break;
                case '2':
                    controllerjurusan.cariJurusan()
                    break;
                case '3':
                    controllerjurusan.tambahJurusan()
                    break;
                case '4':
                    controllerjurusan.hapusJurusan()
                    break;
                case '5':
                    main.menuUtama()
                    break;
            }
        })
    }

    static daftarJurusan() {
        jurusan.read(function (err, data) {
            if (err) {
                console.log('gagal cari Jurusan', err)
                process.exit(1)
            }
            const tableJurusan = new Table({
                head: ['Id Jurusan', 'Nama Jurusan']
                , colWidths: [20, 50]
            });
            data.forEach(item => {
                tableJurusan.push([item.id_jurusan, item.nama_jurusan])
            })
            console.log(tableJurusan.toString())
            controllerjurusan.menuJurusan()
        })
    }

    static cariJurusan() {
        rl.question('Masukkan Kode Jurusan : ', (id_jurusan) => {
            jurusan.search(id_jurusan, (err, data) => {
                if (err) {
                    console.log('gagal cari Jurusan', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    controllerjurusan.menuJurusan()
                } else {
                    jurusanview.detail(id_jurusan, data[0])
                    controllerjurusan.menuJurusan()
                }
            })
        })
    }

    static tambahJurusan() {
        rl.question('masukkan nama jurusan : ', (nama_jurusan) => {
            rl.question('Masukkan Kode Jurusan : ', (id_jurusan) => {
                jurusan.add(nama_jurusan, id_jurusan, (err) => {
                    if (err) {
                        console.log('gagal cari Jurusan', err)
                        controllerjurusan.tambahJurusan()
                        process.exit(1)
                    } else {
                        console.log('jurusan telah ditambahkan')
                        controllerjurusan.daftarJurusan()
                    }
                })
            })
        })
    }

    static hapusJurusan() {
        rl.question('Masukkan Nama Jurusan : ', (id_jurusan) => {
            jurusan.remove(id_jurusan, (err) => {
                if (err) {
                    console.log('gagal hapus Jurusan', err)
                    controllerjurusan.menuJurusan()
                }
                console.log('jurusan telah di Hapus')
                controllerjurusan.daftarJurusan()
            })
        })
    }
}