import Home from '~/pages/Home';
import Following from '~/pages/Following';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: null }
]


const priveRoutes = [

]

export { publicRoutes, priveRoutes }