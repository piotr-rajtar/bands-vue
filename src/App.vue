<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  components: {
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