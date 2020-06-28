export default {
  name: 'note-todos',
  props: ['note'],
  template: `
  <section>
<<<<<<< HEAD
    <span>todos</span>
=======
    <span>{{note.info.label}}</span>
>>>>>>> a6fd629... keep improving
  </section>
    `,
};
