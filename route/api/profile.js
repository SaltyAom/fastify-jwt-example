const { getProfile } = require('../../store')

const profileAPI = async (fastify) => {
    fastify.post('/api/profile', async (req, res) => {
        if (typeof req.cookies['auth'] === "undefined")
            return res.send(
                JSON.stringify({
                    success: false,
                    payload: {
                        profile: {},
                        message: 'No auth'
                    }
                })
            )

        let authToken = res.unsignCookie(req.cookies['auth']),
            token = fastify.jwt.decode(authToken)

        res.send(
            JSON.stringify({
                success: true,
                payload: { profile: getProfile(token.name) }
            })
        )
    })
}

module.exports = profileAPI
