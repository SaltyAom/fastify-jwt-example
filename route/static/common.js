const staticCommon = async (fastify) => {
    fastify.get('/', async (req, res) => {
        if(typeof req.cookies['auth'] === "undefined")
            res.redirect('/login')

        res.sendFile('profile.html')
    })

    fastify.get('/login', async (req, res) => {
        if(typeof req.cookies['auth'] !== "undefined")
            res.redirect('/')

        res.sendFile('login.html')
    })
}

module.exports = staticCommon