import { mailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailDetails from '../cmps/email-details.cmp.js';

export default {
    name: 'email-app',
    template: `
    <main>
    <button v-on:click="test">Delete the first email</button>
    <email-list :emails="emails" @emailSelected="setCurrEmail" v-if="!isReadMode"></email-list>
    <email-details v-else-if="isReadMode" :currEmail="currEmail">
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
                })
    },
    methods: {
        setCurrEmail(email) {
            this.currEmail = email
            this.isReadMode = true
            
        },
        test(){
            this.emails.splice(0, 1)
            
        }
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