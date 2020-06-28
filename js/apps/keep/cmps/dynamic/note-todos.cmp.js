export default {
  name: 'note-todos',
  props: ['note'],
  template: `
  <section>
    <span>{{note.info.label}}</span>
  </section>
    `,
};
