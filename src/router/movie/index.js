export default {
    path: "/movie",
    component: () => import("views/movie"),
    name: "movie",
    redirect: "/movie/movienow",
    meta: {
        tabBar: true,
        auth: false
    },
    children: [
        {
            path: "movienow",
            component: () => import("components/movieNow"),
            name: "movienow",
            meta: {
                tabBar: true,
                auth: false
            }
        }, 
        {
            path: "moviecoming",
            component: () => import("components/moviecoming"),
            name: "moviecoming",
            meta: {
                tabBar: true,
                auth: false
            },
        }
    ]
}