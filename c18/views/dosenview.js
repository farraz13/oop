export default class dosenview {
    static menu() {
        console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar Dosen
    [2]Cari Dosen
    [3]Tambah Dosen
    [4]Hapus Dosen
    [5]Keluar
    `);
    }
    static detail(nip, nama) {
        console.log(`
Hasil pencarian dengan NIP '${nip}' :
Nama Dosen   : ${dosen.nama}
Id Dosen     : ${dosen.nip}
            `)
    }
}