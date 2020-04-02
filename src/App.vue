<template>
  <div id="app">
    <HelloWorld msg="Welcome to my Vue.js test app" />
    <DataBinding />
    <ReactiveData />
    <Loops />
    <Example />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DataBinding from "./components/DataBinding.vue";
import ReactiveData from "./components/ReactiveData.vue";
import Loops from "./components/Loops.vue";
import Example from "./components/Example.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    DataBinding,
    ReactiveData,
    Loops,
    Example
  }
};
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

pre {
  max-width: 600px;
  margin: 0 auto;
  padding: 8px 24px;
  background-color: #f2f2f2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

code {
text-align: left;
}
</style>
