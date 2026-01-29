import useRoute from "./useRoute"

const matchPath = (path, route) => {
    const pathParts = path.split('/')
    const routePath = route.split('/')

    if(pathParts.length !== routePath.length) return null

    const params = {}

    for(let i = 0; i < routePath.length; i++) {
        if(routePath[i].startsWith(':')) {
            const paramName = routePath[i].slice(1)

            params[paramName] = pathParts[i]
        } else if(routePath[i] !== pathParts[i]) {
            return null
        }
    }

    return params
}

const Router = (props) => {
    const { routes } = props

    const path = useRoute()

    for(const route in routes) {
        const params = matchPath(path, route)

        if(params) {
            const Page = routes[route]

            return <Page params={params} />
        }
    }

    const NotFound = routes['*']

    return <NotFound />

}

export default Router