import noteText from './dynamic/note-text.cmp.js';
import noteTodos from './dynamic/note-todos.cmp.js';
import noteImg from './dynamic/note-img.cmp.js';
import noteEdit from '../cmps/note-edit.cmp.js';

export default {
  name: 'note-preview',
  props: ['note'],
  template: `
        <li class="note-preview" >
         <component :is="note.type" :note="note"></component>
         <note-edit :noteId="note.id" />
        </li>
       `,
  // data() {
  //   return {
  //     isEdit: false,
  //   };
  // },
  // methods: {

  // @mouseover="editNote($event)"
  // :class="isShown"

  //   editNote(ev) {
  //     console.log(ev);
  //     this.isEdit = true;
  //   },
  // },
  // computed: {
  //   isShown() {
  //     if (isEdit) return 'edit-note';
  //   },
  components: {
    noteText,
    noteTodos,
    noteImg,
    noteEdit,
  },
  // },
};
