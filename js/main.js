import { router } from './routes.js'
import navBar from './apps/nav-bar.cmp.js'
// import homePage from './apps/home-page.cmp.js'

new Vue({
    el: '#app',
    router,
    template: `
    <div>
        <header>
        <h3>logo goes here</h3>
            <nav-bar/>
        </header>
        <main>
        <h3>main content here
        </h3>
        <router-view/>
    </main>
    </div>
    `,
    components: {
        navBar
        // homePage
    }
});