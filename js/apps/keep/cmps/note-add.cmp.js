import { keepService } from '../services/keep.service.js';
import { eventBus, ADD_NOTE } from '../services/event-bus.service.js';
import noteText from './dynamic/note-text.cmp.js';
import noteTodos from './dynamic/note-todos.cmp.js';
import noteImg from './dynamic/note-img.cmp.js';

export default {
  name: 'note-add',
  template: `
    <form @submit.prevent="saveNote">
    <input type="text" v-model="txt"/>
    <button :disabled="!isValid" @click="add('noteText')">add text</button>
    <button :disabled="!isValid" @click="add('noteImg')">add img</button>
    <button :disabled="!isValid" @click="add('noteTodos')">add todo</button>
    <component v-if="isAdded" :is="type" ></component>
    <span>new note: {{noteToEdit}}{{txt}}</span>
    </form>

    `,

  data() {
    return {
      noteToEdit: null,
      txt: '',
      isAdded: false,
      type: '',
    };
  },
  methods: {
    add(type) {
      this.noteToEdit = keepService.getEmptyNote(type, this.txt);
      this.isAdded = true;
      this.type = type;
    },
    saveNote() {
      keepService.saveNote(this.noteToEdit).then((savedNote) => {
        console.log(savedNote);
      });
    },
  },
  components: {
    noteText,
    noteTodos,
    noteImg,
  },
  computed: {
    isValid() {
      return this.txt;
    },
  },
  // created() {
  //   eventBus.$on(ADD_NOTE, (type) => {
  //     this.noteToEdit = keepService.getEmptyNote(type);
  //   });
  // },
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
