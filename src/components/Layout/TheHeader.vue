<template>
    <header>
        <nav>
            <ul>
                <li v-for="genre in genres" :key="genre.id">
                    <router-link :to="'/' + genre.id">{{ genre.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { genres } from '../../data.js';

export default {
    data() {
        return {
            genres: genres,
        };
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    li {
        list-style-type: none;
    }
</style>