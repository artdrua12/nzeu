import VueRouter from 'vue-router'
import Enter from './components/Enter'
import Registration from './components/Registration'
import Service from './components/Service'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Enter
        },
        {
            path: '/registration',
            component: Registration
        },
        {
            path: '/service',
            component: Service
        }
    ],
    mode: 'history'
})