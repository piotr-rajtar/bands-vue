<template>
    <nav>
        <ul>
            <li v-for="dataItem in data" :key="dataItem.id">
                <router-link :to="dataItem.link">
                    {{dataItem.name}}
                </router-link>
                
            </li>
        </ul> 
    </nav>
    <router-view />
</template>

<script>
import { genres, bands, musicians } from '../data.js';

export default {
    data() {
        return {
            data: [],
        };
    },
    methods: {
        loadData() {
            const data = genres.map(genre => {
                return {
                    id: genre.id,
                    name: genre.name,
                    link: `/${genre.name}`,
                    slots: bands.filter(band => genre.bands.includes(band.id))
                    .map(band => {
                        return {
                            id: band.id,
                            name: band.name,
                            link: `/${genre.name}/${band.id}`,
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
    },
    created() {
        this.loadData();
    },
    beforeRouteUpdate(to, _, next) {
        to.params.slots = this.data;
        next();
    },
}
</script>