<template>
  <div id="app">
    <Home msg="Welcome to my Vue.js test app" />
    <DataBinding />
    <ReactiveData />
    <Loops />
    <Conditional />
    <Input />
    <Lifecycle />
    <Events />
    <Example />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import DataBinding from "./components/DataBinding.vue";
import ReactiveData from "./components/ReactiveData.vue";
import Loops from "./components/Loops.vue";
import Conditional from "./components/Conditional.vue";
import Input from "./components/Input.vue";
import Lifecycle from "./components/Lifecycle.vue";
import Events from "./components/Events.vue";
import Example from "./components/Example.vue";

export default {
  name: "App",
  components: {
    Home,
    DataBinding,
    ReactiveData,
    Loops,
    Conditional,
    Input,
    Lifecycle,
    Events,
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
a {
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
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
button {
  background-color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  cursor: pointer;
  padding: 16px;
  color: white;
  font-size: 0.8em;
}
input {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid darkgrey;
  font-size: 0.8em;
}
</style>
