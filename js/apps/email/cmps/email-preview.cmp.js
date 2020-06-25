export default {
    name: 'email-preview',
    props: ['email'],
    template: `

        <li class="email-preview" v-if="checkIfIsRead">
            <div class="bold-text">
                {{email.subject}}
                {{checkIfIsRead}}
            </div>
        </li>

        <li v-else>
             {{email.subject}}
             {{checkIfIsRead}}
        </li>

       `,
    computed: {

        checkIfIsRead() {
            return this.email.isRead
        }
    }
};