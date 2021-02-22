<template>
    <ul v-if="data">
        <li v-for="dataItem in data" :key="dataItem.id">
            <router-link v-if="dataItem.slots" :to="dataItem.link">
                {{dataItem.name}}
            </router-link>
            <p v-else> {{dataItem.name}} </p>
            <router-view />
        </li>
    </ul> 
</template>

<script>
export default {
    data() {
        return {
            data: null,
        };
    },
    methods: {
        getSlotData(id) {
            const slotData = this.data.find(item => item.id === +id).slots;
            return slotData;
        }
    },
    beforeRouteUpdate(to, _, next) {
        const slotData = this.getSlotData(to.params.id)
        to.params.slots = slotData;
        next();
    },
    created() {
        this.$route.params.slots;
        this.data = this.$route.params.slots;
    }
}
</script>