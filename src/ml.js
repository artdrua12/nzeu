import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ru',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('ru').create({
            cardData: [
                { name: "ВХОД", img: "input.png", to: '/' },
                { name: "РЕГИСТРАЦИЯ", img: "reg.png", to: '/registration' },
                { name: "О СЕРВИСЕ", img: "system.png", to: '/service' },
                { name: "КОНТАКТЫ", img: "cont.png", to: '/contacts' },
                { name: "Абоненты СМДО", img: "input.png", to: '/smdo' }
            ],

            enterTitle: 'Вход осуществляется с использованием мобильной ЭЦП',
            enterBtn: 'Войти в аккаунт',
            enterMsg: 'зарегистрироваться',

            registrationTitle: 'Регистрация осуществляется с использованием ',
            registrationTitleLink: 'мобильной ЭЦП',
            registrationCheckbox: ' Я согласен с условиями ',
            registrationCheckboxLink: ' Пользовательского соглашения',

            serviceTitle: 'Cервис доставки электронных документов «mDoc» позволяет начать удобный и оперативный обмен корреспонденцией с уже существующей базой организаций',
            serviceData: [
                {
                    name: "Целевая аудитория: индивидуальные предприниматели и юридические лица частной формы собственности",
                    img: "clients.png"
                },
                { name: "Обмен электронными документами посредством СМДО", img: "exchange.png" },
                { name: "Подписание электронных документов с использованием электронной цифровой подписи на SIM-карте", img: "signature.png" },
                {
                    name: "Полезная информация. Порядок использования. Руководство пользователя", img: "info.png"
                },
            ],

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
                { name: "ENTER", img: "input.png", to: '/' },
                { name: "REGISTRATION", img: "reg.png", to: '/registration' },
                { name: "ABOUT THE SERVICE", img: "system.png", to: '/service' },
                { name: "CONTACTS", img: "cont.png", to: '/contacts' },
                { name: "SMDO subscribers", img: "input.png", to: '/smdo' }
            ],

            enterTitle: 'You can log in using a mobile digital signature',
            enterBtn: 'Log in to your account',
            enterMsg: 'sign up',

            registrationTitle: 'Registration is performed using ',
            registrationTitleLink: 'a mobile digital signature',
            registrationCheckbox: ' I agree to the terms',
            registrationCheckboxLink: ' User agreement',

            serviceTitle: 'The "mDoc" electronic document delivery service allows you to start a convenient and fast exchange of correspondence with an existing database of organizations',
            serviceData: [
                {
                    name: "Target audience: individual entrepreneurs and legal entities of private form of ownership",
                    img: "clients.png"
                },
                { name: "Exchange of electronic documents via the SMDO", img: "exchange.png" },
                { name: "Signing electronic documents using an electronic digital signature on a SIM card", img: "signature.png" },
                {
                    name: "Useful information. The procedure for the use User manual", img: "info.png"
                },
            ],

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