export default {
    name: 'email-details',
    props: ['currEmail'],
    template: `
<div class="email-details">
<button @click="toggleBackToList">
Back
</button>
</br>
{{currEmail.subject}}:
</br>
{{currEmail.body}}
</br>
<span class="edit-btn"><router-link :to="'/email/edit/' + currEmail.id">Reply</router-link></span>
</div>
    `,
    methods: {
        toggleBackToList() {
            this.$emit('backToEmailList');

        }
    },
    created() {
        this.currEmail.isRead = true;
    }
}