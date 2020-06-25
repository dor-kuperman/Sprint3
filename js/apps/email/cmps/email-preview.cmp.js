export default {
  name: "email-preview",
  props: ["email"],
  template: `
        <li class="email-preview" :class="isRead">
                {{email.subject}}
        </li>
       `,
  computed: {
    isRead() {
      if (this.email.isRead) return "bold-text";
    },
  },
};
