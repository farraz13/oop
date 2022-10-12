export default class jurusanview {
    static menu() {
        console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Jurusan
    [2]Cari Jurusan
    [3]Tambah Jurusan
    [4]Hapus Jurusan
    [5]Keluar
    `);
    }
    static detail(jurusan) {
        console.log(`
Hasil pencarian dengan id jurusan '${kode}' :
Nama Jurusan   : ${jurusan[0].nama_jurusan}
Id Jurusan     : ${jurusan[0].id_jurusan}
            `)
    }
}