export default {
    name: 'note-details',
    template: `
<div v-for="(note, idx) in notes">
    note details
    <component :is="type"></component>
</div>
    `,
    data() {
        return {
            type: 'NoteText'
        }
    }
}