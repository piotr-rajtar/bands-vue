<template>
  <main class="layout">
    
    <aside class="menu">
      <Menu />
    </aside>

    <section class="content">
      <router-view />
    </section>

  </main>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  components: {
    Menu,
  },
}
</script>

<style>
  .layout {
    display: flex;
  }

  .menu {
    flex: 30%;
  }

  .content {
    flex: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  a {
    text-decoration: none;
  }
  .router-link-active, .router-link-exact-active  {
    color: red;
    font-size: 20px;
  }
</style>