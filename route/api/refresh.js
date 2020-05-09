const refreshToken = require('../../libs/refreshToken')

const refreshAPI = async (fastify) => {
    fastify.post('/api/refresh', async (req, res) => {
        let authToken = res.unsignCookie(req.cookies['auth']),
            token = fastify.jwt.decode(authToken)

        if (!token.name)
            return res.send(
                JSON.stringify({
                    success: false,
                    message: 'Failed to refresh token'
                })
            )

        refreshToken(fastify, res, token.name)
        res.send(
            JSON.stringify({
                success: true,
                message: 'Refreshed Token'
            })
        )
    })
}

module.exports = refreshAPI
