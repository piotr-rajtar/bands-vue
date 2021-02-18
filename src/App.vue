<template>
  <the-header />
  <dynamic-list />
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
import DynamicList from './components/DynamicList.vue';

export default {
  components: {
    TheHeader,
    DynamicList,
  },
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>