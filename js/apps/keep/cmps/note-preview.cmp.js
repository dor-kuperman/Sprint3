export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <div class="note-preview">
            note preview
         <!-- <router-link :to="'/car/' + car.id + '/' + car.vendor">Details</router-link> | 
         <router-link :to="'/car/edit/' + car.id">Edit</router-link> -->
        </div>
       `,
};