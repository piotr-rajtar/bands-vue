<template>
    <nav>
        <ul>
            <menu-item v-for="dataItem in data" :key="dataItem.id" v-bind="dataItem" />
        </ul> 
    </nav>
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
                    url: `/${genre.name}`,
                    childrens: bands.filter(band => genre.bands.includes(band.id))
                    .map(band => {
                        return {
                            id: band.id,
                            name: band.name,
                            url: `/${genre.name}/${band.id}`,
                            childrens: musicians.filter(musician => band.musicians.includes(musician.id))
                            .map(musician => {
                                return {
                                    id: musician.id,
                                    name: musician.name,
                                    url: `/${genre.name}/${band.id}/${musician.id}`,
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
}
</script>