class Car {
    constructor(pintu,spion, brandtyre, tahun, garansi, type,size) {
        this.pintu     = pintu;
        this.spion     = spion;
        this.ban       = new Tyre(brandtyre);
        this.tahun     = tahun;
        this.garansi   = garansi;
        this.type      = type;
        this.size      = size;
    }
  }
  
  class Tyre {
    constructor(brand, size) {
        this.brand  = brand;
        this.size   = size;
    }
  }

  class Supra extends Car {
    constructor(tahun) {
        super(2,2, 'koenigseig', tahun)
        this.garansi = 5;
        this.type = 'Toyota supra';
        this.size = '14 inch'
     }
  }
  
  class Alphard extends Car {
    constructor(tahun) {
        super(4,2, 'bridgestone', tahun)
        this.garansi = 5;
        this.type = 'Toyota Alphard';
        this.size = '19 inch'
    }
  }
  const mobil = new Alphard()
  console.log(mobil)