import { eventBus,REMOVE_EMAIL } from "../services/event-bus.service.js";

export default {
  name: "email-preview",
  props: ["email"],
  template: `
<<<<<<< HEAD
  <li class="email-border" :class="isRead">
    <span class="preview-subject">   {{email.subject}}</span>
    <span class="preview-recipient">  {{email.recipient}}</span>
    <span class="preview-body">  {{emailBodySlice}}</span>
=======
  <li class="email-unread" :class="isRead" @click="test">
    <span class="preview-subject">   {{email.subject}}</span>
    <span class="preview-recipient">  {{email.recipient}}</span>
>>>>>>> a6fd629... keep improving
    <span class="preview-time">  {{email.sentAt}}</span>
    <button @click.stop.prevent = "remove">Remove email</button>
  </li>
       `,
  computed: {
    isRead() {
<<<<<<< HEAD
      if (!this.email.isRead) return "email-unread";
      else return "email-bgc"
=======
      if (!this.email.isRead) return "bold-text";
>>>>>>> a6fd629... keep improving
    },
  },
  methods: {
    remove() {
      eventBus.$emit(REMOVE_EMAIL, this.email.id);
    },
<<<<<<< HEAD
  },
  data(){
    return{
      emailBodySlice: this.email.body.slice(0, 20) + '...'
=======
    test(){
      // document.getElementById("email-unread").classList.remove('email-unread');
      
>>>>>>> a6fd629... keep improving
    }
  }
}