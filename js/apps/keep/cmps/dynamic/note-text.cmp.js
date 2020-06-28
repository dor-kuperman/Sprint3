// import { eventBus, EDIT_NOTE } from '../services/event-bus.service.js';

export default {
  name: 'note-text',
  props: ['note'],
  template: `
  <section>
  <p>{{note.info.txt}}</p>
   
  </section>
  `,

  data() {
    return {
      val: this.note.info.txt,
    };
  },
};
