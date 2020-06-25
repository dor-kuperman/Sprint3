import { keepService } from '../services/keep.service.js';
import { eventBus, ADD_NOTE } from '../services/event-bus.service.js';

export default {
  name: 'note-add',
  template: `
    <section>
    <input type="text" />
    <span>new note: {{noteToEdit}}</span>
    </section>

    `,
  data() {
    return {
      noteToEdit: null,
    };
  },
  // methods: {
  //   add() {
  //     this.noteToEdit = keepService.getEmptyNote(this.note.type);
  //   },
  // },
  created() {
    eventBus.$on(ADD_NOTE, (type) => {
      this.noteToEdit = keepService.getEmptyNote(type);
    });
  },
  // created() {
  //   const noteId = this.note.id;
  //   if (noteId) {
  //     keepService.getById(noteId).then((note) => {
  //       this.noteToEdit = { ...note };
  //     });
  //   }
  // },
  // computed:{
  //     txt = 'text here'
  //     placeholder="txt"
  // }
};
