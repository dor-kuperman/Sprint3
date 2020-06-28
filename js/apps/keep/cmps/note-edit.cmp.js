import { eventBus, REMOVE_NOTE } from '../services/event-bus.service.js';
import { keepService } from '../services/keep.service.js';

export default {
  name: 'note-edit',
  props: ['note'],
  template: `
<div>
   <button @click.stop.prevent = "edit" class="fas fa-edit"></button>
   <button @click.stop.prevent = "remove"  class="fas fa-trash-alt"></button>
</div>
    `,
  methods: {
    remove() {
      eventBus.$emit(REMOVE_NOTE, this.note.id);
    },
    edit() {
    this.saveNote()
    },
    saveNote() {
      keepService.saveNote(this.note).then((savedNote) => {
        console.log(savedNote);
      });
    },
  },
};
