const fastify = require('fastify')(),
    path = require('path')

require('dotenv').config()

fastify
    .register(require('fastify-helmet'))
    .register(require('fastify-rate-limit'), {
        max: 40,
        timeWindow: '30 minute'
    })
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

module.exports = fastify
