import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ru',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('ru').create({
            cardData: [
                { name: "ВХОД", img: "input.png" },
                { name: "РЕГИСТРАЦИЯ", img: "reg.png" },
                { name: "О СЕРВИСЕ", img: "system.png" },
                { name: "КОНТАКТЫ", img: "cont.png" },
                { name: "Абоненты СМДО", img: "input.png" }
            ],

            enterTitle: 'Вход осуществляется с использованием мобильной ЭЦП',
            enterBtn: 'Войти в аккаунт',
            enterMsg: 'зарегистрироваться',

            registrationTitle:'Регистрация осуществляется с использованием ',
            registrationTitleLink:'мобильной ЭЦП',
            registrationCheckbox:' Я согласен с условиями ',
            registrationCheckboxLink:' Пользовательского соглашения',

            footerAdress: 'Наш адрес:',
            footerContacts: 'Контакты',
            footerCity: '220004 г. Минск,',
            footerEnterprise: 'Республиканское унитарное предприятие, ',
            footerNational: 'Национальный центр электронных услуг,',
            footerStreet: 'ул. Раковская, д.14',
            footerCopy: '© Минск 2020 mDoc - Национальный центр электронных услуг'
        }),

        new MLanguage('en').create({
            cardData: [
                { name: "ENTER", img: "input.png" },
                { name: "REGISTRATION", img: "reg.png" },
                { name: "ABOUT THE SERVICE", img: "system.png" },
                { name: "CONTACTS", img: "cont.png" },
                { name: "SMDO subscribers", img: "input.png" }
            ],

            enterTitle: 'You can log in using a mobile digital signature',
            enterBtn: 'Log in to your account',
            enterMsg: 'sign up',

            registrationTitle:'Registration is performed using ',
            registrationTitleLink:'a mobile digital signature',
            registrationCheckbox:' I agree to the terms',
            registrationCheckboxLink:' User agreement',

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