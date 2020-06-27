export default {
  name: 'note-img',
  props: ['note'],
  template: `
  <section>
    <span>img</span>
  <img :src="note.url" alt=""/>
  </section>
    `,
};
