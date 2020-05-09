const { validate } = require('../../store'),
    refreshToken = require('../../libs/refreshToken')

const loginAuth = async (fastify) => {
    fastify.post('/login', async (req, res) => {
        let { username = false, password = false } = req.body

        if (!validate(username, password))
            return res.send(
                JSON.stringify({
                    success: false,
                    data: 'Username or Password is incorrect'
                })
            )

        refreshToken(fastify, res, username)

        res.send(
            JSON.stringify({
                success: true,
                data: 'Successfully Logged in'
            })
        )
    })
}

module.exports = loginAuth
