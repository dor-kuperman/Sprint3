import { eventBus,REMOVE_EMAIL } from "../services/event-bus.service.js";

export default {
  name: "email-preview",
  props: ["email"],
  template: `
        <li class="email-preview" :class="isRead">
                {{email.subject}}
                <router-link :to="'/email/edit/' + email.id">Reply</router-link>
                <button @click.stop.prevent = "remove">Remove email</button>
        </li>
       `,
  computed: {
    isRead() {
      if (this.email.isRead) return "bold-text";
    },
  },
  methods: {
    remove() {
      eventBus.$emit(REMOVE_EMAIL, this.email.id);
    },
  }
}