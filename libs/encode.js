const { pbkdf2Sync } = require('pbkdf2')

const encode = (message) => {
    let encoded = pbkdf2Sync(
        pbkdf2Sync(message, message, 4, 32),
        process.env.salt,
        4,
        32,
        'sha512'
    )

    return encoded.toString('hex')
}

module.exports = encode
