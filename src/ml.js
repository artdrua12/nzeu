import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ru',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('ru').create({
            title: 'Привет',
            msg: 'Сообщение на руском'
        }),

        new MLanguage('en').create({
            title: 'Hello',
            msg: 'Message from English'
        })
    ]
})