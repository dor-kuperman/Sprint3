import { eventBus, REMOVE_NOTE } from '../services/event-bus.service.js';

export default {
  name: 'note-edit',
  props: ['noteId'],
  template: `
<div>
   <button>edit</button>
   <button @click.stop.prevent = "remove">remove</button>
</div>
    `,
  methods: {
    remove() {
      eventBus.$emit(REMOVE_NOTE, this.noteId);
    },
  },
};
