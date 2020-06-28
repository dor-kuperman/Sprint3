export default {
    name: 'email-details',
    props: ['email'],
    template: `
<div>
<button @click="toggleBackToList">
Back
</button>
</br>
{{email.subject}}:
</br>
<<<<<<< HEAD
{{email.body}}
</br>
<span class="edit-btn"><router-link :to="'/email/edit/' + email.id">Reply</router-link></span>
=======
{{currEmail.body}}
<span class="edit-btn"><router-link :to="'/email/edit/' + currEmail.id">Reply</router-link></span>
>>>>>>> ba649625fcfc9387e2e5df46474acc9b6455a71d
</div>
    `,
    methods: {
        toggleBackToList() {
            this.$emit('backToEmailList');

        }
    },
    created() {
        this.email.isRead = true;
    }
}