export default {
  name: 'note-img',
  props: ['note'],
  template: `
  <section>
    <span>img</span>
<<<<<<< HEAD
  <img :src="note.url" alt=""/>
=======
  <img :src="note.info.url" alt=""/>
>>>>>>> a6fd629... keep improving
  </section>
    `,
};
