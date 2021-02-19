<template>
    <ul>
        <li v-for="band in bands" :key="band.id">
            <router-link :to="'/' + genreId + '/' + band.id">{{ band.name }}</router-link>
        </li>
    </ul>

    <ul v-if="musicians">
        <li v-for="musician in musicians" :key="musician.id">{{ musician.name }}</li>
    </ul>
</template>

<script>
import { genres, bands, musicians } from '../data.js';

export default {
    props: ['genreId', 'bandId'],
    data() {
        return {
            bands: [],
            musicians: [],
            activeGenre: null,
        };
    },
    methods: {
        loadBands(genreId) {
            const genre = genres.find(genre => genre.id === +genreId);
            const bandsList = bands.filter(band => genre.bands.includes(band.id));
            this.bands = bandsList;
        },
    },
    watch: {
        genreId(newGenreId) {
            this.activeGenre = newGenreId;
            this.loadBands(newGenreId);
        }
    },
    created() {
        this.loadBands(this.genreId);
 
    },
    beforeRouteUpdate(to, _, next) {
        this.musicians = [];
  
        if(to.params.bandId) {
            const activeBand = this.bands.find(band => band.id === +to.params.bandId);
            const musiciansList = musicians.filter(musician => activeBand.musicians.includes(musician.id));
            this.musicians = musiciansList;
        }

        next();
    },
}
</script>