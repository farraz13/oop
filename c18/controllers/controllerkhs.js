import main, { rl } from '../main.js'
import Table from 'cli-table';
import khs from '../models/khs.js'

import indexview from '../views/indexview.js';
import khsview from '../views/khsview.js';

export default class controllerkhs {

    static menuKhs() {
        khsview.menu()
        indexview.line();
        rl.question(`masukkan salah satu no. dari opsi diatas : `, (opsi) => {
            switch (opsi) {
                case '1':
                    controllerkhs.daftarKhs()
                    break;
                case '2':
                    controllerkhs.cariKhs()
                    break;
                case '3':
                    controllerkhs.tambahKhs()
                    break;
                case '4':
                    controllerkhs.hapusKhs()
                    break;
                case '5':
                    main.menuUtama()
                    break;
            }
        })
    }

    static daftarKhs() {
        khs.read(function (err, data) {
            if (err) {
                console.log('gagal cari Khs', err)
                process.exit(1)
            }
            const tableKhs = new Table({
                head: ['NIM', 'ID Jurusan', 'ID Matkul', 'Nilai']
                , colWidths: [20, 30, 20, 20]
            });
            data.forEach(item => {
                tableKhs.push([item.nim, item.id_jurusan, item.id_matkul, item.nilai])
            })
            console.log(tableKhs.toString())
            controllerkhs.menuKhs()
        })
    }

    static cariKhs() {
        rl.question('Masukkan Kode Khs : ', (nim) => {
            khs.search(nim, (err, data) => {
                if (err) {
                    console.log('gagal cari Khs', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    console.log('data tidak ditemukan')
                    controllerkhs.menuKhs()
                } else {
                    khsview.detail(nim, data[0])
                    controllerkhs.menuKhs()
                }
            })
        })
    }

    static tambahKhs() {
        rl.question('masukkan nim : ', (nim) => {
            rl.question('Masukkan ID Jurusan : ', (id_jurusan) => {
                rl.question('Masukkan ID Matkul : ', (id_matkul) => {
                    rl.question('Masukkan Nilai : ', (nilai) => {
                        khs.add(nim,id_jurusan, id_matkul,nilai, (err) => {
                            if (err) {
                                console.log('gagal tambah Khs', err)
                                controllerkhs.tambahKhs()
                                process.exit(1)
                            } else {
                                console.log('khs telah ditambahkan')
                                controllerkhs.daftarKhs()
                            }
                        })
                    })
                })
            })
        })
    }

    static hapusKhs() {
        rl.question('Masukkan nim  : ', (nim) => {
            khs.remove(nim, (err) => {
                if (err) {
                    console.log('gagal hapus Khs', err)
                    controllerkhs.menuKhs()
                }
                console.log('khs telah di Hapus')
                controllerkhs.daftarKhs()
            })
        })
    }
}