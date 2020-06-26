
import { mailService } from '../services/email.service.js';

export default {
    template: `
    <section>
        <form @submit.prevent="saveEmail">
            <h2>{{(isNewEmail)? 'New' : 'Reply'}} Email</h2>
            Subject: <input type="text" v-model.trim="emailToEdit.subject"/>
            <br/>
            Content: <input type="text" v-model.trim="emailToEdit.body"/>
            <button :disabled="!isValid">Send</button>
            
            </form>
            <hr />
            <pre>{{emailToEdit}}</pre> 
        </section>
    `,
    data() {
        return {
            emailToEdit: mailService.getEmailTemplate(),
            isNewEmail: false
        }
    },
    created() {
        const emailId = this.$route.params.theEmailId;

        if (emailId) {
            mailService.getById(+emailId)
                .then(email => {
                    this.emailToEdit = { ...email };
                    if (this.emailToEdit) {
                        this.emailToEdit.subject = 'Re: ' + this.emailToEdit.subject
                    }
                })
            this.isNewEmail = false


        } else if (!emailId) {
            this.isNewEmail = true
        }
    },
    computed: {
        isValid() {
            return (this.emailToEdit.subject && this.emailToEdit.body)
        },
    },
    methods: {
        saveEmail() {
            mailService.saveEmail(this.emailToEdit)
                .then(savedEmail => {
                    console.log('SAVED EMAIL: ', savedEmail);
                    this.$router.push('/email')
                })
        }
    },
}