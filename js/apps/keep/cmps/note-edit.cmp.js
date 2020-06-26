export default {
  name: 'note-edit',
  props: ['currNote'],
  template: `
<div>
    {{currNote}}
</div>
    `,
  // data() {
  //     return {
  //         type: 'NoteText'
  //     }
  // }
};
