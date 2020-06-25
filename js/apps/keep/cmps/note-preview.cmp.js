
import { eventBus,REMOVE_NOTE } from "../services/event-bus.service.js";

export default {
  name: "note-preview",
  props: ["note"],
  template: `
        <li class="note-preview">
        note preview
         {{note.type}}
         <button @click.stop.prevent = "remove">remove</button>
        </li>
       `,
  methods: {
    remove() {
      eventBus.$emit(REMOVE_NOTE, this.note.id);
    },
  },
};

{
  /* <component :is="note.type" @click.native="showNote"></component> */
}
