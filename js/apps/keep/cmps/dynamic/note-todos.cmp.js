// import noteEditCmp from "../note-edit.cmp";

export default {
  name: "note-todos",
  props: ["note"],
  template: `
  <ul class="todos clean-list">
 <h3> {{note.info.label}}</h3>
  <li  v-for="currTodo in todos" :key="currTodo.id" class="todo">{{currTodo.txt}}</li>
  </ul>
    `,
  data() {
    return {
      todos: this.note.info.todos,
    };
  },
};
