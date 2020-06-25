

export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <li class="note-preview">
        note preview
         {{note.type}}
        
        </li>
       `,
   
};

{/* <component :is="note.type" @click.native="showNote"></component> */}