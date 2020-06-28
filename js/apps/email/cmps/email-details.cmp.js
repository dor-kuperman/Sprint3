import { mailService } from "../services/email.service.js";

export default {
    name: 'email-details',
    props: ['email'],
    template: `
<div class="email-details">
<button @click="toggleBackToList">
Back
</button>
</br>
{{email.subject}}:
</br>
{{email.body}}
</br>
<span class="edit-btn"><router-link :to="'/email/edit/' + email.id" >Reply</router-link></span>
</div>
    `,
    methods: {
        toggleBackToList() {
            console.log(this.email);
            this.$emit('backToEmailList');
            mailService.saveEmail(this.email)
                .then(savedEmail => {

                    console.log('SAVED EMAIL: ', savedEmail);
                })


        },
    },
    created() {
        this.email.isRead = true;
    }
}