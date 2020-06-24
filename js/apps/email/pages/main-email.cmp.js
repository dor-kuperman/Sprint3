import { mailService } from '../services/email.service.js';

export default {
    name: 'main-email',
    template: `
    <div>
    email goes here
    {{mails}}
    </div>
    `,
    data() {
        return {
            mails: null
        }
    },
    created() {
        mailService.getMails()
            .then(mails => {
                this.mails = mails;
            })
    }
}