import { mailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailDetails from '../cmps/email-details.cmp.js';
import { eventBus, REMOVE_EMAIL } from "../services/event-bus.service.js";

export default {
    name: 'email-app',
    template: `
    <main>
    <router-link to="/email/edit" v-if="!isReadMode" class="btn-compose">Compose</router-link>
    <email-list :emails="emails" @emailSelected="setCurrEmail" v-if="!isReadMode"></email-list>
    <email-details v-else-if="isReadMode" :email="currEmail" @backToEmailList="backToEmailList">
    </email-details>
    </main>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
            isReadMode: false,
            currEmail: null
        }
    },
    created() {
        mailService.getMails()
            .then(emails => {
                this.emails = emails;
            }),

            eventBus.$on(REMOVE_EMAIL, (id) => {
                console.log(id);
                
                mailService.removeById(id)
                mailService.getMails()
                    .then(emails => {
                        this.emails = emails;
                    })
                return;
            });
    },
    methods: {
        setCurrEmail(email) {
            this.currEmail = email
            this.isReadMode = true
        },
        backToEmailList() {
            this.isReadMode = false;
        },
    },
    computed: {
        emailsToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.emails;

            // var filteredBooks = this.books.filter(book => {
            //     return book.title.toLowerCase().includes(filterBy.searchStr.toLowerCase());
            // });
            // filteredBooks = filteredBooks.filter(book => {
            //     return (filterBy.price) ? book.price === filterBy.price : true;
            // });

            // return filteredBooks;
        },
    },
    components: {
        emailList,
        emailDetails
    }
}