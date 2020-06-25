import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
    <ul class="email-list">
            <email-preview v-for="email in emails" :email="email" @click.native="selectEmail(email)"/>
            </ul>
    `,
    methods: {
        selectEmail(email) {
            this.$emit('emailSelected', email);
        }
    },
    components: {
        emailPreview
    },
}