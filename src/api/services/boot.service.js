const app = require('@app')

const config = require('@config')

module.exports = (err) => {
    console.clear()

    if(err) {
        console.log('Erro to enter in database')
    } else {
        
        app.listen(config.app.port, (error) => {
            if (error) {
                return console.log('Unespected error')
            } else {
                console.log(`Start in http://localhost:${config.app.port}`)
            }
        })
    }
}