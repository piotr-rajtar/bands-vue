<template>
    <li>
        <div @click="showBands">{{ name }}</div>
        <ul v-if="areBandsVisible">
            <music-band v-for="band in bandsDetails" 
                :key="band.id"
                v-bind="band"
            />
        </ul>
    </li>
</template>

<script>
import MusicBand from './MusicBand.vue';

export default {
    inject: ['getBandsDetails'],
    components: {
        MusicBand,
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
      bands: {
          type: Array,
          required: true,
      },
    },
    data() {
        return {
           areBandsVisible: false,
           bandsDetails: [],
        };
    },
    methods: {
        showBands() {
            this.areBandsVisible = !this.areBandsVisible;
            this.bandsDetails = this.getBandsDetails(this.bands);
        },
    }
}
</script>