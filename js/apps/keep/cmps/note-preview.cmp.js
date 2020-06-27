import { eventBus, REMOVE_NOTE } from '../services/event-bus.service.js';
import noteText from './dynamic/note-text.cmp.js';
import noteTodos from './dynamic/note-todos.cmp.js';
import noteImg from './dynamic/note-img.cmp.js';
import noteEdit from '../cmps/note-edit.cmp.js';

export default {
  name: 'note-preview',
  props: ['note'],
  template: `
        <li class="note-preview">
         <component :is="note.type"></component>
         <button>edit</button>
         <button @click.stop.prevent = "remove">remove</button>
         
        </li>
       `,
  methods: {
    remove() {
      eventBus.$emit(REMOVE_NOTE, this.note.id);
    },
  },
  components: {
    noteText,
    noteTodos,
    noteImg,
    noteEdit,
  },
};
