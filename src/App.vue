<template>
  <the-header />
  <main>
    <router-view />
  </main>
  <the-footer />
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
import TheFooter from './components/Layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
  a {
    text-decoration: none;
  }
  .router-link-active  {
    color: red;
    font-size: 20px;
  }
</style>