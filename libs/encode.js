const { pbkdf2Sync } = require('pbkdf2')

const encode = (message) => {
    let encoded = pbkdf2Sync(message, process.env.salt, 4, 32, 'sha512')

    return encoded.toString('hex')
} 

module.exports = encode