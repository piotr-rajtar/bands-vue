<template>
    <nav>
        <ul>
            <li v-for="dataItem in data" :key="dataItem.id">
                <router-link :to="dataItem.link">
                    {{dataItem.name}}
                </router-link>
                <router-view />
            </li>
        </ul> 
    </nav>
   
</template>

<script>
import { genres, bands, musicians } from '../data.js';

export default {
    data() {
        return {
            data: [],
            slotData: [],
        };
    },
    methods: {
        loadData() {
            const data = genres.map(genre => {
                return {
                    id: genre.id,
                    name: genre.name,
                    link: `/menu/${genre.name}`,
                    slots: bands.filter(band => genre.bands.includes(band.id))
                    .map(band => {
                        return {
                            id: band.id,
                            name: band.name,
                            link: `/menu/${genre.name}/${band.id}`,
                            slots: musicians.filter(musician => band.musicians.includes(musician.id))
                            .map(musician => {
                                return {
                                    id: musician.id,
                                    name: musician.name,
                                };
                            }),
                        };
                    }),
                };
            });
            
            this.data = data;
        },
        getSlotData(name) {
            const slotData = this.data.find(item => item.name === name).slots;
            return slotData;
        }
    },
    created() {
        this.loadData();
    },
    beforeRouteUpdate(to, _, next) {
        const slotData = this.getSlotData(to.params.genre)
        to.params.slots = slotData;

        next();
    },
}
</script>