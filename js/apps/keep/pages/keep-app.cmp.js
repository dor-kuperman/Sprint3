import { keepService } from '../services/keep.service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteEdit from '../cmps/note-edit.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import {
  eventBus,
  REMOVE_NOTE,
  ADD_NOTE,
} from '../services/event-bus.service.js';

export default {
  name: 'keep-app',
  template: `
    <main class="keep-app">

    <note-add/>
    <note-list v-if="!noteSelected" @edit-note="editNote" :notes="notes"/>
    <note-edit v-if="noteSelected" :currNote="currNote"/>
   
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
  },
  components: {
    noteList,
    noteEdit,
    noteAdd,
  },
  methods: {
    editNote(note) {
      this.noteSelected = true;
      this.currNote = note;
      console.log(this.currNote);
      
    },
    // add() {
    //   eventBus.$emit(ADD_NOTE, 'noteText');
    // },
  },
};
