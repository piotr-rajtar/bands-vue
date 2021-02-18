<template>
    <li>
        <div @click="showMusicians">{{ name }}</div>
        <ul v-if="areMusiciansVisible">
            <musician v-for="musician in musiciansDetails" 
                :key="musician.id"
                v-bind="musician"
            />
        </ul>
    </li>
</template>

<script>
import Musician from './Musician.vue';

export default {
    inject: ['getMusiciansDetails'],
    components: {
        Musician
    },
    props: {
      id: {
          type: Number,
          required: true,
      },
      name: {
          type: String,
          required: true,
      },
      musicians: {
          type: Array,
          required: true,
      },
    },
    data() {
        return {
            areMusiciansVisible: false,
            musiciansDetails: [],
        };
    },
    methods: {
        showMusicians() {
            this.areMusiciansVisible = !this.areMusiciansVisible;
            this.musiciansDetails = this.getMusiciansDetails(this.musicians);
        }
    }
}
</script>