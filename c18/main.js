import readline from 'readline'
import sqlite3 from 'sqlite3'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const db = new sqlite3.Database('university.db', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log('gagal terhubung dengan database', err)
    }
})

function line() {
    console.log('=======================================================')
}

function menuMahasiswa(){
    console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Mahasiswa
    [2]Cari Mahasiswa
    [3]Tambah Mahasiswa
    [4]Hapus Mahasiswa
    [5]Keluar
    `);
    line();
    rl.question(`masukkan salah satu no. dari opsi diatas`, (opsi) =>{
        switch(opsi){
            case'1':
            DaftarMahasiswa()
            break;
            case'2':
            CariMahasiswa()
            break;
            case'3':
            TambahMahasiswa()
            break;
            case'4':
            HapusMahasiswa()
            break;
            case'5':
            menuUtama()
            break;
        }
        
    })
}
function menuJurusan(){

}
function menuDosen(){

}
function menuMataKuliah(){

}
function menuKontrak(){

}

function menuUtama(users){
    console.log(`welcome,${users.username}, your acces level ${users.role.toUpperCase()} `)
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
    rl.question(`masukkan salah satu no. dari opsi diatas`, (opsi) =>{
        switch(opsi){
            case'1':
            menuMahasiswa()
            break;
            case'2':
            menuJurusan()
            break;
            case'3':
            menuDosen()
            break;
            case'4':
            menuMataKuliah()
            break;
            case'5':
            menuKontrak()
            case'6':
            process.exit()
            break;
        }
    })
}

function welcome() {
    line()
    console.log('welcome to Institut Pertanian Bogor')
    console.log('Kampus IPB, Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680')
    line()
    askUsername(function (username) {
        db.all(`SELECT * FROM users WHERE username =?`, [username], (err, data) => {
            if (err)
                return console.log('username tidak ditemukan', err)
            if (data.length == 0) {
                console.log(`username ${username} tidak terdaftar`)
            }
            askPassword(function(password){
                if(data[0].password === password){
                    menuUtama(data[0])
                }else{
                    console.log('password salah')
                }
            })

        })
    })
}

function askUsername(callback) {
    rl.question('username :', (username) => {
        callback(username)
    })

}

function askPassword(callback) {
    rl.question('password :', (password) => {
        callback(password)
    })
}

welcome()