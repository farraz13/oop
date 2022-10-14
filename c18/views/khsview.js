export default class khsview {
    static menu() {
        console.log(`
    silahkan pilih opsi dibawah ini :
    [1]Daftar KHS
    [2]Cari KHS
    [3]Tambah KHS
    [4]Hapus KHS
    [5]Keluar
    `);
    }
    static detail(nim, id_jurusan, id_matkul, nilai) {
        console.log(`
Hasil pencarian dengan NIM '${nim}' :
Nim                 : ${khs.nim}
ID Jurusan          : ${khs.alamat}
ID Matkul           : ${khs.jurusan}
Nilai               : ${khs.nilai}
            `)
    }
}