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
                    askUsername()
                }
                askPassword(data[0])
            })
        })
    }
    
    static askPassword(user) {
        rl.question('password :', (password) => {
            if (password == user.password) {
                console.log(`welcome,${user.username}, your acces level ${user.role.toUpperCase()} `)
                menuUtama()
            } else {
                console.log('password salah')
                askPassword(user)
            }
        })
    }
    
}