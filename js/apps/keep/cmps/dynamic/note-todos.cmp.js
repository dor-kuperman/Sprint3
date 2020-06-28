// import noteEditCmp from "../note-edit.cmp";

export default {
  name: "note-todos",
  props: ["note"],
  template: `
  <ul class="clean-list">
  {{note.info.label}}
  <li  v-for="currTodo in todos" :key="currTodo.id">{{currTodo.txt}}</li>
  </ul>
    `,
  data() {
    return {
      todos: this.note.info.todos,
    };
  },
};
