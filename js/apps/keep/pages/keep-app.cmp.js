import { keepService } from '../services/keep.service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteDetails from '../cmps/note-details.cmp.js';
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
    <button @click="add">add</button> 
    <note-add/> 
    <note-list @show-note="showNote" v-if="!noteSelected" :notes="notes"/>
    <note-details v-else-if="noteSelected" :currNote="currNote"/>
   
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
    noteDetails,
    noteAdd,
  },
  methods: {
    showNote(note) {
      this.noteSelected = true;
      this.currNote = note;
    },
    add() {
      eventBus.$emit(ADD_NOTE, 'noteText');
    },
  },
};
