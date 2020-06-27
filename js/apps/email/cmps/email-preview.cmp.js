import { eventBus,REMOVE_EMAIL } from "../services/event-bus.service.js";

export default {
  name: "email-preview",
  props: ["email"],
  template: `
  <li class="email-unread" :class="isRead" @click="test">
    <span class="preview-subject">   {{email.subject}}</span>
    <span class="preview-recipient">  {{email.recipient}}</span>
    <span class="preview-time">  {{email.sentAt}}</span>
    <button @click.stop.prevent = "remove">Remove email</button>
  </li>
       `,
  computed: {
    isRead() {
      if (!this.email.isRead) return "bold-text";
    },
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