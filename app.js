const app = require('fastify')(),
    path = require('path')

require('dotenv').config()

app
    .register(require('fastify-helmet'))
    // .register(require('fastify-rate-limit'), {
    //     max: 40,
    //     timeWindow: '30 minute'
    // })
    .register(require('fastify-compress'))
    .register(require('fastify-static'), {
        root: path.join(__dirname, 'public'),
        prefix: '/public'
    })
    .register(require('fastify-formbody'))
    .register(require('fastify-jwt'), {
        secret: process.env.jwt_secret
    })
    .register(require('fastify-cookie'), {
        secret: process.env.cookie_secret
    })

const run = async (app) => {
    try {
        await app.listen(3000)
        console.log("Listening at http://localhost:3000")
    } catch(error) {
        console.warn(error)
        process.exit(0)
    }
}

module.exports = {
    app,
    run
}