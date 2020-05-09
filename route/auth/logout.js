const logout = async (fastify) => {
    fastify.get('/logout', async (req, res) => {
        let authToken = req.cookies['auth']

        if (authToken) res.clearCookie('auth', {
            path: '/'
        })

        res.send(
            JSON.stringify({
                success: true,
                message: 'Successfully Logout'
            })
        )
    })
}

module.exports = logout
