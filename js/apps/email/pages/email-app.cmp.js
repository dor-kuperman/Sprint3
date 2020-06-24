import { mailService } from '../services/email.service.js';

export default {
    name: 'email-app',
    template: `
    <div>
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