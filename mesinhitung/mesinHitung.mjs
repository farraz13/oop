export const Pi = 22 / 7;

export default class MesinHitung {
    constructor(angka) {
        this.x = 1;
    }

    add(angka) {
        this.x += angka;
        return this;
        //penjumlahan
    }

    substract(angka) {
        this.x -= angka;
        return this;
        //pengurangan
    }

    multiply(angka) {
        this.x *= angka;
        return this;
        //perkalian
    }

    divide(angka) {
        this.x /= angka;
        return this;
        //pembagian
    }

    square() {
        this.x = Math.pow(this.x, 2);
        return this;
        // untuk mendapatkan jari jari lingkaran
    }

    exponent(angka) {
        this.x = Math.pow(this.x, angka);
        return this;
        //pangkat
    }

    squareRoot() {
        this.x = Math.sqrt(this.x);
        return this;
        //akar
    }

    result() {
        console.log(this.x)
    }
};