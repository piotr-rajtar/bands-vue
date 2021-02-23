<template>
    <li>
        <router-link :to="url">
            <span @click="setActive">{{name}}</span>
        </router-link>
        <ul v-show="isActive" v-if="childrens && childrens.length">
            <menu-item v-for="children in childrens" :key="children.id" v-bind="children" />
        </ul>
    </li>
</template>

<script>
export default {
    props: ['name', 'childrens', 'url'],
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        setActive() {
            this.isActive = !this.isActive;
        }
    }
}
</script>