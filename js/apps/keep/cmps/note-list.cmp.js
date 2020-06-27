import notePreview from './note-preview.cmp.js';
// import {eventBus} from '../services/event-bus.service.js';

export default {
  name: 'note-list',
  props: ['notes'],
  template: `
        <ul class="note-list">
            <note-preview v-for="currNote in notes" :note="currNote" @mouseover.native="noteToEdit(currNote)" :key="currNote.id"/>
            <note-edit :class="isShown" :currNote="currNote"/>
        </ul>
    `,
  data() {
    return {
      noteSelected: false,
      currNote: null,
      isOver: false,
    };
  },
  methods: {
    noteToEdit(note) {
      this.$emit('edit-note', note);
    },
    editNote(note) {
      this.noteSelected = true;
      this.currNote = note;
      this.isOver = true;
    },
    computed: {
      isShown() {
        if (this.isOver) {
          return 'shown';
        }
      },
    },
    components: {
      notePreview,
    },
  },
};
