<template>
    <h1>Fixed Header</h1>
    <h2>Genre</h2>
    <p>{{ genreDisplay }}</p>
    <h2>Band</h2>
    <p>{{ bandDisplay }}</p>
    <h2>Musician</h2>
    <p>{{ musicianDisplay }}</p>
</template>

<script>
export default {
    props: ['genre', 'band', 'musician'],
    computed: {
        genreDisplay() {
            if(this.genre) {
                return this.genre;
            } else {
                return '';
            }
        },
        bandDisplay() {
            if(this.band) {
                return this.band;
            } else {
                return '';
            }
        },
        musicianDisplay() {
            if(this.musician) {
                return this.musician;
            } else {
                return '';
            }
        },
    },
}
</script>

<style scoped>
h1, h2, p {
    flex: 100%;
    text-align: center;
}
</style>
