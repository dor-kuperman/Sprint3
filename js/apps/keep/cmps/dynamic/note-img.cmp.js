export default {
  name: 'note-img',
  props: ['note'],
  template: `
  <section >
  <img :src="note.info.url"/>
  </section>
    `,

//     computed:{
  // :class="noteImg"
//       noteImag(){
//         var width= 
// return `width: ${width} + px`
//       }
    // }
};
