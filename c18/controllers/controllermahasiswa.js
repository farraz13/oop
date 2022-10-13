import main, { rl } from '../main.js'
import Table from 'cli-table';
import mahasiswa from '../models/mahasiswa.js'

import indexview from '../views/indexview.js';
import mahasiswaview from '../views/mahasiswaview.js';

export default class controllermahasiswa {

    static menuMahasiswa() {
        mahasiswaview.menu()
        indexview.line();
        rl.question(`masukkan salah satu no. dari opsi diatas : `, (opsi) => {
            switch (opsi) {
                case '1':
                    controllermahasiswa.daftarMahasiswa()
                    break;
                case '2':
                    controllermahasiswa.cariMahasiswa()
                    break;
                case '3':
                    controllermahasiswa.tambahMahasiswa()
                    break;
                case '4':
                    controllermahasiswa.hapusMahasiswa()
                    break;
                case '5':
                    main.menuUtama()
                    break;
            }
        })
    }

    static daftarMahasiswa() {
        mahasiswa.read(function (err, data) {
            if (err) {
                console.log('gagal cari Mahasiswa', err)
                process.exit(1)
            }
            const tableMahasiswa = new Table({
                head: ['NIM', 'Nama, Alamat, Jurusan']
                , colWidths: [20, 30, 50, 30]
            });
            data.forEach(item => {
                tableMahasiswa.push([item.nim, item.nama, item.alamat, item.jurusan])
            })
            console.log(tableMahasiswa.toString())
            controllermahasiswa.menuMahasiswa()
        })
    }

    static cariMahasiswa() {
        rl.question('Masukkan Kode Mahasiswa : ', (nim) => {
            mahasiswa.search(nim, (err, data) => {
                if (err) {
                    console.log('gagal cari Mahasiswa', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    console.log('data tidak ditemukan')
                    controllermahasiswa.menuMahasiswa()
                } else {
                    mahasiswaview.detail(nim, data[0])
                    controllermahasiswa.menuMahasiswa()
                }
            })
        })
    }

    static tambahMahasiswa() {
        rl.question('masukkan nama mahasiswa : ', (nama_mahasiswa) => {
            rl.question('Masukkan alamat : ', (Alamat) => {
                rl.question('Masukkan jurusan mahasiswa : ', (jurusan) => {
                    rl.question('Masukkan NIM : ', (nim) => {
                        mahasiswa.add(nama_mahasiswa,Alamat, jurusan,nim, (err) => {
                            if (err) {
                                console.log('gagal tambah Mahasiswa', err)
                                controllermahasiswa.tambahMahasiswa()
                                process.exit(1)
                            } else {
                                console.log('mahasiswa telah ditambahkan')
                                controllermahasiswa.daftarMahasiswa()
                            }
                        })
                    })
                })
            })
        })
    }

    static hapusMahasiswa() {
        rl.question('Masukkan Nama Mahasiswa : ', (nim) => {
            mahasiswa.remove(nim, (err) => {
                if (err) {
                    console.log('gagal hapus Mahasiswa', err)
                    controllermahasiswa.menuMahasiswa()
                }
                console.log('mahasiswa telah di Hapus')
                controllermahasiswa.daftarMahasiswa()
            })
        })
    }
}