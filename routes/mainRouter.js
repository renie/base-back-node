import {
    rootRoutes,
    notFoundRoutes,
    genericErrorFunction
} from './generalRoutes'

export const setRoute = (route, expressInstance, genericErrorFn = genericErrorFunction) => {
    expressInstance[route.method](route.url, route.fn, route.errorFn || genericErrorFn)
    return expressInstance
}

export const setAllRoutes = (
    expressInstance, 
    routes = [
        ...rootRoutes,
        ...notFoundRoutes
    ]
) => {
    routes.forEach(route => setRoute(route, expressInstance))
    return expressInstance
}
