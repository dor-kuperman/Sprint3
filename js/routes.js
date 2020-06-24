import homePage from './apps/home-page.cmp.js';
import mainEmail from './apps/email/pages/main-email.cmp.js';
import mainKeep from './apps/keep/pages/main-keep.cmp.js';
import mainBooks from './apps/books/pages/main-books.cmp.js';

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
        path: '/keep',
        component: mainKeep
    },
    {
        path: '/books',
        component: mainBooks
    },

];

export const router = new VueRouter({ routes: myRoutes })