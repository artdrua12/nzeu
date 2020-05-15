import VueRouter from 'vue-router'
import Enter from './components/Enter'
import Registration from './components/Registration'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Enter
        },
        {
            path: '/Registration',
            component: Registration
        }
    ],
    mode: 'history'
})