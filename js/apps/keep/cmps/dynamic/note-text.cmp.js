export default {
  name: 'note-text',
  props: ['note'],
  template: `
  <section>
    <input type="text" v-model="val"/>
  </section>
  `,

  data() {
    return {
      val: this.note.info.text,
    };
  },
};
