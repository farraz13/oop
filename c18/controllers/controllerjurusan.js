import {rl} from '../main.js'
import Table from 'cli-table';
import jurusan from '../models/jurusan'

var tableJurusan = new Table({
    head: ['Id Jurusan', 'Nama Jurusan']
    , colWidths: [20, 50]
});


const db = new sqlite3.Database('university.db', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log('gagal terhubung dengan database', err)
    }
})

function line() {
    console.log('=======================================================')
}

function welcome() {
    line()
    console.log('welcome to Institut Pertanian Bogor')
    console.log('Kampus IPB, Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680')
    line()
    askUsername(function (username) {

    })
}

function menuUtama() {
    line()
    console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Mahasiswa
    [2]Jurusan
    [3]Dosen
    [4]Mata kuliah
    [5]Kontrak
    [6]Keluar
    `);
    line();
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

function menuMahasiswa() {
    console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Mahasiswa
    [2]Cari Mahasiswa
    [3]Tambah Mahasiswa
    [4]Hapus Mahasiswa
    [5]Keluar
    `);
    line();
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
function menuJurusan() {
    console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Jurusan
    [2]Cari Jurusan
    [3]Tambah Jurusan
    [4]Hapus Jurusan
    [5]Keluar
    `);
    line();
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

function daftarJurusan() {
    jurusan.read(function(err, data){
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

function cariJurusan() {
    rl.question('Masukkan Kode Jurusan : ', (kode) => {
        db.all('select * from jurusan WHERE id_jurusan = ?', [kode], (err, data) => {
            if (err) {
                console.log('gagal cari Jurusan', err)
                process.exit(1)
            }
            if (data.length == 0) {
                menuJurusan()
            } else {
                console.log(`
Hasil pencarian dengan id jurusan '${kode}' :
Nama Jurusan   : ${data[0].nama_jurusan}
Id Jurusan : ${data[0].id_jurusan}
            `)
                menuJurusan()
            }
        })
    })
}

function tambahJurusan() {
    rl.question('masukkan nama jurusan : ', (nama_jurusan) => {
    rl.question('Masukkan Kode Jurusan : ', (id_jurusan) => {
            db.run('INSERT INTO jurusan (nama_jurusan, id_jurusan) VALUES (?, ?)', [nama_jurusan, id_jurusan], (err) => {
                if (err) {
                    console.log('gagal cari Jurusan', err)
                    process.exit(1)
                }
                console.log('jurusan telah ditambahkan')
                    daftarJurusan()
            })
        })
    })
}

function hapusJurusan() {
    rl.question('Masukkan Kode Jurusan : ', (id_jurusan) => {
            db.run('DELETE FROM jurusan WHERE id_jurusan = ?', [id_jurusan],(err) => {
                if (err) {
                    console.log('gagal hapus Jurusan', err)
                    menuJurusan()
                }
                console.log('jurusan telah di Hapus')
                    daftarJurusan()
            })
        })
}

function menuDosen() {

}
function menuMataKuliah() {

}
function menuKontrak() {

}

function askUsername() {
    rl.question('username :', (username) => {
        db.all(`SELECT * FROM users WHERE username =?`, [username], (err, data) => {
            if (err) {
                console.log('username tidak ditemukan', err)
                process.exit(1)
            }
            if (data.length == 0) {
                console.log(' username tidak terdaftar', err)
                askUsername()
            }
            askPassword(data[0])
        })
    })
}

function askPassword(user) {
    rl.question('password :', (password) => {
        if (password == user.password) {
            console.log(`welcome,${user.username}, your acces level ${user.role.toUpperCase()} `)
            menuUtama()
        } else {
            console.log('password salah')
            askPassword(user)
        }
    })
}

welcome()