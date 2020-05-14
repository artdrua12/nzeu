import VueRouter from 'vue-router'
import Enter from './components/Enter'
import Test from './components/Test'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Enter
        },
        {
            path: '/test',
            component: Test
        }
    ]
})