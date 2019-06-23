import express from 'express'

import { setAllRoutes } from './routes/mainRouter'


const defaultPort = 3000

const logURLMappings = (expressInstance, logFn) =>
    expressInstance._router.stack
      .filter(r => r.route)
      .map(r => r.route.stack[0])
      .map(r => `Path: ${r.regexp} Method: ${r.method}`)
      .forEach(r => logFn(r))

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
        setRouteFn(expressLib()),
        port,
        logFn
    )
}

module.exports = startApp
