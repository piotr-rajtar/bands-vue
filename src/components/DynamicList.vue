<template>
    <ul>
        <genre v-for="genre in genres" :key="genre.id"
            v-bind="genre"
        />
    </ul>

</template>

<script>
import Genre from './Genre.vue';

export default {
  components: { Genre },
    data() {
        return {
            genres: [
                {
                    id: 1,
                    name: 'rock',
                    bands: [1,2]
                },
                {
                    id: 2,
                    name: 'pop',
                    bands: [3,4]
                },
            ],
            bands: [
                {
                    id: 1,
                    name: 'rock band1',
                    musicians: [1,2]
                },
                {
                    id: 2,
                    name: 'rock band2',
                    musicians: [3,4]
                },
                {
                    id: 3,
                    name: 'pop band1',
                    musicians: [5,6]
                },
                {
                    id: 4,
                    name: 'pop band2',
                    musicians: [7,8]
                },
            ],
            musicians: [
                {
                    id: 1,
                    name: 'rock guy1',
                },
                {
                    id: 2,
                    name: 'rock guy2',
                },
                {
                    id: 3,
                    name: 'rock guy3',
                },
                {
                    id: 4,
                    name: 'rock guy4',
                },
                {
                    id: 5,
                    name: 'pop guy1',
                },
                {
                    id: 6,
                    name: 'pop guy2',
                },
                {
                    id: 7,
                    name: 'pop guy3',
                },
                {
                    id: 8,
                    name: 'pop guy4',
                },
            ],
        };
    },
    methods: {
        getBandsDetails(bands) {
            return this.bands.filter(band => bands.includes(band.id));
        },
        getMusiciansDetails(musicians) {
            return this.musicians.filter(musician => musicians.includes(musician.id))
        }
    },
    provide() {
        return {
            getMusiciansDetails: this.getMusiciansDetails,
            getBandsDetails: this.getBandsDetails,
        };
    }
}
</script>