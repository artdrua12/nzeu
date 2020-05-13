import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ru',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('ru').create({
            enterTitle: 'Вход осуществляется с использованием мобильной ЭЦП',
            enterBtn: 'Войти в аккаунт',
            enterMsg: 'зарегистрироваться',

            footerAdress: 'Наш адрес:',
            footerContacts: 'Контакты',
            footerCity: '220004 г. Минск,',
            footerEnterprise: 'Республиканское унитарное предприятие, ',
            footerNational: 'Национальный центр электронных услуг,',
            footerStreet: 'ул. Раковская, д.14',
            footerCopy: '© Минск 2020 mDoc - Национальный центр электронных услуг'
        }),

        new MLanguage('en').create({
            enterTitle: 'You can log in using a mobile digital signature',
            enterBtn: 'Log in to your account',
            enterMsg: 'sign up',

            footerAdress: 'Our address:',
            footerContacts: 'Contacts',
            footerCity: '220004 Minsk,',
            footerEnterprise: 'Republican unitary enterprise, ',
            footerNational: 'National center for electronic services,',
            footerStreet: 'Rakovskaya street, 14',
            footerCopy: '© Minsk 2020 mDoc - National center for electronic services'
        })
    ]
})