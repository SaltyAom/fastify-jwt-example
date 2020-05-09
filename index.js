const fastify = require('./fastify'),
    staticCommon = require('./route/static/common'),
    { loginAuth, logout } = require('./route/auth'),
    { profileAPI, refreshAPI } = require('./route/api')

fastify.register(staticCommon)

fastify.register(loginAuth)
fastify.register(logout)

fastify.register(profileAPI)
fastify.register(refreshAPI)

fastify
    .listen(3000)
    .then(() => {
        console.log('Listening at :3000')
    })
    .catch((error) => {
        console.log(error)
    })
