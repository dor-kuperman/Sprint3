import notePreview from './note-preview.cmp.js';

export default {
    name: 'note-list',
    props: ['notes'],
    template: `
        <section class="note-list">
            <note-preview v-for="currNote in notes" :note="currNote" :key="currNote.id"/>
        </section>
    `,
    // methods: {
    //     selectCar(car) {
    //         this.$emit('carSelected', car);
    //     }
    // },
    components: {
        notePreview
    }
}