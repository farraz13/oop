import { rl } from '../main.js'
import Table from 'cli-table';
import jurusan from '../models/jurusan'
import user from '../models/user'
import jurusanview from '../views/jurusanview.js';
import indexview from '../views/indexview.js';

export default class controllerjurusan{

static menuMahasiswa() {
    console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Mahasiswa
    [2]Cari Mahasiswa
    [3]Tambah Mahasiswa
    [4]Hapus Mahasiswa
    [5]Keluar
    `);
    indexview.line();
    rl.question(`masukkan salah satu no. dari opsi diatas : `, (opsi) => {
        switch (opsi) {
            case '1':
                DaftarMahasiswa()
                break;
            case '2':
                CariMahasiswa()
                break;
            case '3':
                TambahMahasiswa()
                break;
            case '4':
                HapusMahasiswa()
                break;
            case '5':
                menuUtama()
                break;
        }

    })
}
static menuJurusan() {
    jurusanview.menu()
    indexview.line();
    rl.question(`masukkan salah satu no. dari opsi diatas : `, (opsi) => {
        switch (opsi) {
            case '1':
                daftarJurusan()
                break;
            case '2':
                cariJurusan()
                break;
            case '3':
                tambahJurusan()
                break;
            case '4':
                hapusJurusan()
                break;
            case '5':
                menuUtama()
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
        tableJurusan = new Table({
            head: ['Id Jurusan', 'Nama Jurusan']
            , colWidths: [20, 50]
        });
        data.forEach(item => {
            tableJurusan.push([item.id_jurusan, item.nama_jurusan])
        })
        console.log(tableJurusan.toString())
        menuJurusan()
    })
}

static cariJurusan() {
    rl.question('Masukkan Kode Jurusan : ', (kode) => {
        jurusan.search(kode, (err, data) => {
            if (err) {
                console.log('gagal cari Jurusan', err)
                process.exit(1)
            }
            if (data.length == 0) {
                menuJurusan()
            } else {
                jurusanview.detail(data[0])
                menuJurusan()
            }
        })
    })
}

static tambahJurusan() {
    rl.question('masukkan nama jurusan : ', (nama_jurusan) => {
        rl.question('Masukkan Kode Jurusan : ', (id_jurusan) => {
            jurusan.add(id_jurusan, nama_jurusan, (err) => {
                if (err) {
                    console.log('gagal cari Jurusan', err)
                    process.exit(1)
                }else{
                console.log('jurusan telah ditambahkan')
                daftarJurusan()
                }
            })
        })
    })
}

static hapusJurusan() {
    rl.question('Masukkan Kode Jurusan : ', (id_jurusan) => {
        jurusan.remove(id_jurusan, (err) => {
            if (err) {
                console.log('gagal hapus Jurusan', err)
                menuJurusan()
            }
            console.log('jurusan telah di Hapus')
            daftarJurusan()
        })
    })
}
}