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
    static detail(id_jurusan, jurusan) {
        console.log(`
Hasil pencarian dengan id jurusan '${id_jurusan}' :
Nama Jurusan   : ${jurusan.nama_jurusan}
Id Jurusan     : ${jurusan.id_jurusan}
            `)
    }
}