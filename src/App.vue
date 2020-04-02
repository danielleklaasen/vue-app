<template>
  <div id="app">
    <HelloWorld msg="Welcome to my Vue.js test app"/>
    <DataBinding/>
    <ReactiveData/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DataBinding from './components/DataBinding.vue'
import ReactiveData from './components/ReactiveData.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DataBinding,
    ReactiveData,
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