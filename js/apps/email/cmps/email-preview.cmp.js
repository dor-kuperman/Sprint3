import { eventBus,REMOVE_EMAIL } from "../services/event-bus.service.js";

export default {
  name: "email-preview",
  props: ["email"],
  template: `
  <li class="email-border" :class="className">
    <span class="preview-subject">   {{email.subject}}</span>
    <span class="preview-recipient">  {{email.recipient}}</span>
    <span class="preview-body">  {{emailBodySlice}}</span>
    <span class="preview-time">  {{email.sentAt}}</span>
    <button @click.stop.prevent = "remove">Remove email</button>
  </li>
       `,
  computed: {
    className() {
      if (!this.email.isRead) return "email-unread";
      else return "email-bgc"
    },
    // if(this.email.body.lengtht )
  },
  methods: {
    remove() {
      eventBus.$emit(REMOVE_EMAIL, this.email.id);
    },
  },
  data(){
    return{
      emailBodySlice: this.email.body.slice(0, 20) + '...'
    }
  }
}