export default class matkulview {
    static menu() {
        console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Mata Kuliah
    [2]Cari Mata Kuliah
    [3]Tambah Mata Kuliah
    [4]Hapus Mata Kuliah
    [5]Keluar
    `);
    }
    static detail(nama ,sks, id_matkul, ) {
        console.log(`
Hasil pencarian dengan ID Mata Kuliah '${id_matkul}' :
Nama Mata Kuliah   : ${matkul.nama}
SKS Mata Kuliah    : ${matkul.sks}
Id Mata Kuliah     : ${matkul.id_matkul}

            `)
    }
}