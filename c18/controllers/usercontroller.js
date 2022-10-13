import user from '../models/user.js'
import main, { rl } from  '../main.js'

export default class usercontroller{
    static askUsername() {
        rl.question('username :', (username) => {
            user.findByUsername(username, (err, data) => {
                if (err) {
                    console.log('username tidak ditemukan', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    console.log(' username tidak terdaftar', err)
                    usercontroller.askUsername()
                }
                usercontroller.askPassword(data[0])
            })
        })
    }
    
    static askPassword(user) {
        rl.question('password :', (password) => {
            if (password == user.password) {
                console.log(`welcome,${user.username}, your acces level ${user.role.toUpperCase()} `)
               main.menuUtama()
            } else {
                console.log('password salah')
                usercontroller.askPassword(user)
            }
        })
    }
    
}