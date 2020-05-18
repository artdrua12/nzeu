import VueRouter from 'vue-router'
import Enter from './components/Enter'
import Registration from './components/Registration'
import Service from './components/Service'
import Smdo from './components/Smdo'
import Abonent from './components/Abonent'
import AbonentFull from './components/AbonentFull'

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
        },
        {
            path: '/smdo',
            component: Smdo
        },
        {
            path: '/abonent/:id',
            component: Abonent,
            children:[
                {
                    path: 'full',
                    component: AbonentFull,
                    name: 'abonentFull'
                },
            ]
        }
    ],
    mode: 'history'
})