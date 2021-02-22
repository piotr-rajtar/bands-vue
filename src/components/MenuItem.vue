<template>
    <ul>
        <li v-for="slotItem in slotData" :key="slotItem.id">
            <router-link v-if="slotItem.slots" :to="slotItem.link">
                {{slotItem.name}}
            </router-link>
            <router-link v-else to="/">
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
            initData: [],
            slotData: null,
        };
    },
    methods: {
        getSlotDataByGenre(genre) {
            console.log('zmiana genre')
            this.slotData = this.initData.find(slot => slot.name === genre).slots;
            console.log(this.slotData)
        },
        getSlotDataById(id) {
            console.log('zmiana id');
            const newData = this.slotData.find(item => item.id === id).slots;
            this.slotData = newData;
        }
    },
    beforeRouteUpdate(to, _, next) {
       to.params.slots = this.slotData;
       console.log(to.params.slots)

        next();
    },
    created() {
        if(!this.$route.params.id) {
            this.initData = this.$route.params.slots;
            this.slotData = this.$route.params.slots.find(slot => slot.name === this.genre).slots;
        } else {
            console.log('z ididkiem')
            this.slotData = this.$route.params.slots;
        }
    },
    watch: {
        genre(newGenre) {
            console.log('dziala genre')
            this.getSlotDataByGenre(newGenre);
        },
        id(newId) {
            if(newId) {
                console.log('zmianiemay id)');
                this.getSlotDataById(+newId);
            }

        }
    }
}
</script>