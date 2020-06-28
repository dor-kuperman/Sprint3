import { keepService } from '../services/keep.service.js';
import noteText from './dynamic/note-text.cmp.js';
import noteTodos from './dynamic/note-todos.cmp.js';
import noteImg from './dynamic/note-img.cmp.js';

export default {
  name: 'note-add',
  template: `
    <form @submit.prevent="saveNote" class="add-note">
    <input type="text" v-model="txt"/>
    <button :disabled="!isValid" @click="add('noteText')" class="fas fa-font"></button>
    <button :disabled="!isValid" @click="add('noteImg')">add img</button>
    <button :disabled="!isValid" @click="add('noteTodos')">add todo</button>
    </form>

    `,

  data() {
    return {
      newNote: null,
      txt: '',
      type: '',
    };
  },
  methods: {
    add(type) {
      this.newNote = keepService.getEmptyNote(type, this.txt);
    },
    saveNote() {
      keepService.saveNote(this.newNote).then((savedNote) => {
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
  //   const noteId = this.note.id;
  //   if (noteId) {
  //     keepService.getById(noteId).then((note) => {
  //       this.newNote = { ...note };
  //     });
  //   }
  // },
  // computed:{
  //     txt = 'text here'
  //     :placeholder="txt"
  // }
};
