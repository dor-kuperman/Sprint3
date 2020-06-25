

export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <div class="note-preview">
        note preview
         {{note.type}}
        
        </div>
       `,
   
};

{/* <component :is="note.type" @click.native="showNote"></component> */}