export default {
  name: "note-details",
  props: ["currNote"],
  template: `
<div>
    note details
    {{currNote}}
</div>
    `,
  // data() {
  //     return {
  //         type: 'NoteText'
  //     }
  // }
};
