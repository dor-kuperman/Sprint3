export default {
    name: 'email-details',
    props: ['currEmail'],
    template: `
<<<<<<< HEAD
<div class="email-details">
=======
<div>
>>>>>>> a6fd629... keep improving
<button @click="toggleBackToList">
Back
</button>
</br>
{{currEmail.subject}}:
</br>
{{currEmail.body}}
<<<<<<< HEAD
</br>
=======
>>>>>>> a6fd629... keep improving
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