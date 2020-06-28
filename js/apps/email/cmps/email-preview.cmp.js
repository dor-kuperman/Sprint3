import { eventBus,REMOVE_EMAIL } from "../services/event-bus.service.js";

export default {
  name: "email-preview",
  props: ["email"],
  template: `
<<<<<<< HEAD
  <li class="email-border" :class="className">
=======
  <li class="email-unread" :class="isRead" @click="test">
>>>>>>> ba649625fcfc9387e2e5df46474acc9b6455a71d
    <span class="preview-subject">   {{email.subject}}</span>
    <span class="preview-recipient">  {{email.recipient}}</span>
    <span class="preview-time">  {{email.sentAt}}</span>
    <button @click.stop.prevent = "remove">Remove email</button>
  </li>
       `,
  computed: {
<<<<<<< HEAD
    className() {
      if (!this.email.isRead) return "email-unread";
      else return "email-bgc"
=======
    isRead() {
      if (!this.email.isRead) return "bold-text";
>>>>>>> ba649625fcfc9387e2e5df46474acc9b6455a71d
    },
    // if(this.email.body.lengtht )
  },
  methods: {
    remove() {
      eventBus.$emit(REMOVE_EMAIL, this.email.id);
    },
    test(){
      // document.getElementById("email-unread").classList.remove('email-unread');
      
    }
  }
}