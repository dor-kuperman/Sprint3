import { keepService } from '../services/keep.service.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
    name: 'main-keep',
    template: `
    <main class="keep-app">
    <note-list v-if="" :notes="notes"/>
    <note-details v-else="" :notes="notes"/>
    </main>
    `,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes;
            })
    },
    components: {
        noteList,
    }
}