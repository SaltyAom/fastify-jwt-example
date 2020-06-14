const encode = require('./libs/encode')

/**
 * Mocked Database
 */
const store = [
    {
        name: 'SaltyAom',
        password: encode('12345678'), // This actually should be enocded value.
        favorite: 'Salmon' // Other public profile
    }
]

exports.validate = (username, password) => {
    let encodedPassword = encode(password)

    return (
        username &&
        password &&
        store.some(
            (user) =>
                username === user.name && encodedPassword === user.password
        )
    )
}

exports.getProfile = (username) => {
    let { password, ...profile } = store.find((user) => user.name === username)

    return profile
}
