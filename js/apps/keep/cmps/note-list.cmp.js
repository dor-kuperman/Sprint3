import notePreview from './note-preview.cmp.js';
// import {eventBus} from '../services/event-bus.service.js';

export default {
  name: 'note-list',
  props: ['notes'],
  template: `
        <ul class="note-list">
            <note-preview v-for="currNote in notes" :note="currNote" @click.native="selectNote(currNote)" :key="currNote.id"/>
        </ul>
    `,
  methods: {
    selectNote(note) {
      this.$emit('show-note', note);
    },
  },
  components: {
    notePreview,
  },
};
