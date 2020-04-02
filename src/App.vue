<template>
  <div id="app">
    <!-- Data binding example -->
    <!-- can also be written as v-bind:alt -->
    <img id="mainImg" :alt="imageAlt" src="./assets/logo.png">
    <!-- Reactive Data -->
    {{ reactive }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      reactive: 'Reactive data example. This text will respond to change.',
      imageAlt: 'Logo'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#mainImg {
  width: 250px;
}
</style>