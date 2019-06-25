import express from 'express'
import bodyParser from 'body-parser'

import { setAllRoutes } from './routes/mainRouter'


const defaultPort = 3000

const logURLMappings = (expressInstance, logFn) => {
    expressInstance._router.stack
      .filter(r => r.route)
      .map(r => r.route)
      .map(r => `${r.path} - ${r.stack[0].method} - ${r.stack[0].name}`)
      .forEach(r => logFn(r))
}

const getExpressInstance = (expressLib) => {
    const instance = expressLib()
    instance.use(bodyParser.json())
    return instance
}

export const startServer = (expressInstance, port = defaultPort, logFn = console.log) => {
    logURLMappings(expressInstance, logFn)
    expressInstance.listen(port, () => console.log(`\n\nServer listening at port ${port}...`))
    return expressInstance
}

const startApp = ({
    expressLib: expressLib,
    setRouteFn: setRouteFn,
    port: port,
    logFn: logFn
} = {
    expressLib: express,
    setRouteFn: setAllRoutes,
    port: defaultPort,
    logFn: console.log
}) => {
    startServer(
        setRouteFn(getExpressInstance(expressLib)),
        port,
        logFn
    )
}

module.exports = startApp
