const cpus = require('os').cpus().length,
    cluster = require('cluster')

const { app, run } = require('./app')

const staticCommon = require('./route/static/common'),
    { loginAuth, logout } = require('./route/auth'),
    { profileAPI, refreshAPI } = require('./route/api')

app
    .register(staticCommon)
    .register(loginAuth)
    .register(logout)

app
    .register(profileAPI)
    .register(refreshAPI)

if(cluster.isMaster)
    for(let server = 0; server < cpus; server++)
        cluster.fork()
else
    run(app)