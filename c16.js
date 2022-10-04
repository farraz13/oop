class Tyre {
  constructor(brand, size) {
    this.brand = brand;
    this.size  = size;
  }
}

class Car {
  constructor(pintu, spion, brand, tyre, tahun, garansi, type) {
    this.pintu   = pintu;
    this.spion   = spion;
    this.ban     = new Tyre(brand, tyre);
    this.tahun   = tahun;
    this.garansi = garansi;
    this.type    = type;
  }
}


class Supra extends Car {
  constructor(tahun) {
    super(2, 2, 'koenigseig', 14, tahun)
    this.garansi = 2;
    this.type = 'Toyota supra';
  }
}

class Alphard extends Car {
  constructor(tahun) {
    super(4, 2, 'bridgestone', 19, tahun)
    this.garansi = 5;
    this.type = 'Toyota Alphard';
  }
}

class CarFactory {
  constructor(tipe1, tipe2) {
    this.tipe1 =tipe1;
    this.tipe2 =tipe2;
    this.cars  = [];
  }
  produksi(tahun) {
    let Supra1 = 0;
    for (let i = 0; i < Math.random() * 5; i++) {
      this.cars.push(new Supra(tahun))
      Supra1++
    }
    let Alphard1 = 0;
    for (let i = 0; i < Math.random() * 5; i++) {
      this.cars.push(new Alphard(tahun))
      Alphard1++
    }
    console.log(`pada tahun ${tahun}, TOYOTA ${this.tipe1} memproduksi sebanyak ${Supra1}, dan tipe ${this.tipe2} memproduksi sebanyak ${Alphard1}`)
  }
  warranty(tahun){
    this.cars.forEach(content => {
        console.log(`
        ===================================
        Nama Mobil: ${content.type}
        Jumlah Pintu: ${content.pintu}
        Merk Ban: ${content.ban.brand}
        Ukuran Ban: ${content.ban.size}
        Tahun Pembuatan: ${content.tahun}
        Garansi : ${content.garansi} Tahun
        Masa berlaku garansi: ${(tahun - content.tahun) > content.garansi ? 'Tidak berlaku' : 'Masih berlaku'}     
        ===================================
        `)
    })
  }
}


const mobil = new CarFactory('Supra', 'Alphard')

mobil.produksi(2020);
mobil.warranty(2025)
