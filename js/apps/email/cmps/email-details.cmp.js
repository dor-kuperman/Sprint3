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
<span class="edit-btn"><router-link :to="'/email/edit/' + email.id">Reply</router-link></span>
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