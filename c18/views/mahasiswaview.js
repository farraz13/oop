export default class mahasiswaview {
    static menu() {
        console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Mahasiswa
    [2]Cari Mahasiswa
    [3]Tambah Mahasiswa
    [4]Hapus Mahasiswa
    [5]Keluar
    `);
    }
    static detail(nim, mahasiswa) {
        console.log(`
Hasil pencarian dengan NIM '${nim}' :
Nama Mahasiswa   : ${mahasiswa.nama_mahasiswa}
Alamat           : ${mahasiswa.alamat}
Jurusan          : ${mahasiswa.jurusan}
NIM              : ${mahasiswa.nim}
            `)
    }
}