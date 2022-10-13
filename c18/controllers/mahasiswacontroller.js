import main, { rl } from '../main.js'
import Table from 'cli-table';
import mahasiswa from '../models/mahasiswa.js'
import mahasiswaview from '../views/mahasiswaview.js';
import indexview from '../views/indexview.js';

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
                head: ['Id Mahasiswa', 'Nama Mahasiswa']
                , colWidths: [20, 50]
            });
            data.forEach(item => {
                tableMahasiswa.push([item.id_mahasiswa, item.nama_mahasiswa])
            })
            console.log(tableMahasiswa.toString())
            controllermahasiswa.menuMahasiswa()
        })
    }

    static cariMahasiswa() {
        rl.question('Masukkan Kode Mahasiswa : ', (id_mahasiswa) => {
            mahasiswa.search(id_mahasiswa, (err, data) => {
                if (err) {
                    console.log('gagal cari Mahasiswa', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    controllermahasiswa.menuMahasiswa()
                } else {
                    mahasiswaview.detail(id_mahasiswa, data[0])
                    controllermahasiswa.menuMahasiswa()
                }
            })
        })
    }

    static tambahMahasiswa() {
        rl.question('masukkan nama mahasiswa : ', (nama_mahasiswa) => {
            rl.question('Masukkan Kode Mahasiswa : ', (id_mahasiswa) => {
                mahasiswa.add(nama_mahasiswa, id_mahasiswa, (err) => {
                    if (err) {
                        console.log('gagal cari Mahasiswa', err)
                        controllermahasiswa.tambahMahasiswa()
                        process.exit(1)
                    } else {
                        console.log('mahasiswa telah ditambahkan')
                        controllermahasiswa.daftarMahasiswa()
                    }
                })
            })
        })
    }

    static hapusMahasiswa() {
        rl.question('Masukkan Nama Mahasiswa : ', (id_mahasiswa) => {
            mahasiswa.remove(id_mahasiswa, (err) => {
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