<template>
    <ul>
        <li v-for="slotItem in slotData" :key="slotItem.id">
            <router-link :to="slotItem.link">
                {{slotItem.name}}
            </router-link>     
        </li>
    </ul> 
    <router-view />
</template>

<script>
export default {
    props: {
        genre: {
            type: String,
            required: false,
        },
        id: {
            type: String,
            required: false,
        }
    },
    data() {
        return {
            slotData: null,
        };
    },
    methods: {
        getSlotDataByGenre() {
            console.log('zmiana genre')
            this.slotData = this.$route.params.slots[0].slots;
        },
        getSlotDataById(id) {
            const newData = this.slotData.find(item => item.id === id).slots;
            this.slotData = newData;
        }
    },
    // beforeRouteUpdate(to, from, next) {
    //     if(to.params.id && !from.params.id) {
    //         console.log('nasz roua')
    //         const newSlotData = this.slotData.find(item => item.id === +to.params.id).slots;
    //         to.params.slots = newSlotData;
    //     } else {
    //         const bands = this.slotData = this.$route.params.slots[0].slots;
    //         const musicians = bands.find(item => item.id === to.params.id).slots;
    //         to.params.slots = musicians;
    //     }

    //     next();
    // },
    created() {
        this.slotData = this.$route.params.slots[0].slots;
    },
    watch: {
        genre() {
            this.getSlotDataByGenre();
        },
        id(newId) {
            if(newId) {
                this.getSlotDataById(+newId);
            }
        }
    }
}
</script>