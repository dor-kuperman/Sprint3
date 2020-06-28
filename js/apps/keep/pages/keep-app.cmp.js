import { keepService } from '../services/keep.service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import { eventBus, REMOVE_NOTE } from '../services/event-bus.service.js';

export default {
  name: 'keep-app',
  template: `
    <main class="keep-app">
    <note-add/> 
<<<<<<< HEAD
    <note-list @edit-note="editNote" :notes="notes" class="note-list clean-list flex wrap space-around"/>
=======
    <note-list :notes="notes" class="note-list clean-list flex wrap space-around"/>
>>>>>>> a6fd629... keep improving
    </main>
    `,

  data() {
    return {
      notes: [],
      noteSelected: false,
      currNote: null,
    };
  },
  created() {
    keepService.getNotes().then((notes) => {
      this.notes = notes;
    }),
      eventBus.$on(REMOVE_NOTE, (id) => {
        keepService.removeById(id);
      });
    // eventBus.$on(EDIT_NOTE, (id) => {
    //   keepService.removeById(id);
    // });
  },
  components: {
    noteList,
    noteAdd,
<<<<<<< HEAD
  },
  methods: {
    editNote(note) {
      this.noteSelected = true;
      this.currNote = note;
      
    },
=======
>>>>>>> a6fd629... keep improving
  },
  // methods: {

  //   @edit-note="editNote"

  //   editNote(note) {
  //     this.noteSelected = true;
  //     this.currNote = note;
  //   },
  // },
};
