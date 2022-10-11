import sqlite3 from 'sqlite3'
import readline from 'readline'

export const db = new sqlite3.Database('university.db', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log('gagal terhubung dengan database', err)
    }
})

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})