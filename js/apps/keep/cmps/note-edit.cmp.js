import { eventBus, REMOVE_NOTE } from '../services/event-bus.service.js';
<<<<<<< HEAD

export default {
  name: 'note-edit',
  props: ['noteId'],
  template: `
<div>
   <button>edit</button>
=======
import { keepService } from '../services/keep.service.js';

export default {
  name: 'note-edit',
  props: ['note'],
  template: `
<div>
   <button @click.stop.prevent = "edit">edit</button>
>>>>>>> a6fd629... keep improving
   <button @click.stop.prevent = "remove">remove</button>
</div>
    `,
  methods: {
    remove() {
<<<<<<< HEAD
      eventBus.$emit(REMOVE_NOTE, this.noteId);
=======
      eventBus.$emit(REMOVE_NOTE, this.note.id);
    },
    edit() {
    this.saveNote()
    },
    saveNote() {
      keepService.saveNote(this.note).then((savedNote) => {
        console.log(savedNote);
      });
>>>>>>> a6fd629... keep improving
    },
  },
};
