const refreshToken = async (fastify, res, username) => {
    let refreshToken = fastify.jwt.sign({
        sub: 'token',
        name: username,
        iat: Date.now() + 86400
    })

    return res.setCookie('auth', refreshToken, {
        httpOnly: true,
        maxAge: Date.now() + 86400,
        sameSite: true,
        path: '/',
        signed: true
    })
}

module.exports = refreshToken
