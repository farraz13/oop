export default class indexview{
    
    static line(){
        console.log('=======================================================')
    }
    
    static menuUtama(){
        console.log(`
        silahkan pilih opsi dibawah ini :
        [1]Mahasiswa
        [2]Jurusan
        [3]Dosen
        [4]Mata kuliah
        [5]Kontrak
        [6]Keluar
        `);
    }

    static welcome(){
        indexview.line()
        console.log('welcome to Institut Pertanian Bogor')
        console.log('Kampus IPB, Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680')
        indexview.line()
    }
}