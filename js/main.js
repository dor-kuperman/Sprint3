import { router } from './routes.js'
import navBar from './apps/nav-bar.cmp.js'
// import homePage from './apps/home-page.cmp.js'

new Vue({
    el: '#app',
    router,
    template: `
    <div>
        <header>
        <div class="logo">AppSus</div>
            <nav-bar/>
        </header>
        <router-view/>
    </div>
    `,
    components: {
        navBar
        // homePage
    }
});