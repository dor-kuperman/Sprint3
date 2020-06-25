import homePage from './apps/home-page.cmp.js';
import mainEmail from './apps/email/pages/email-app.cmp.js';
import mainKeep from './apps/keep/pages/keep-app.cmp.js';
import mainBooks from './apps/books/pages/main-books.cmp.js';
import emailEdit from './apps/email/pages/email-edit.cmp.js';

// ?
const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: mainEmail
    },
    {
        path: '/email/edit/:theEmailId?',
        component: emailEdit
    },
    {
        path: '/keep',
        component: mainKeep
    },
    {
        path: '/books',
        component: mainBooks
    },

];

export const router = new VueRouter({ routes: myRoutes })