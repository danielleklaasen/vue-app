<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Vue.js overview</h3>
    <ul>
      <li>
        <a href="#reactive-data">Reactive data</a>
      </li>
      <li>
        <a href="#data-binding">Data binding</a>
      </li>
      <li>
        <a href="#loops">Loops</a>
      </li>
      <li>
        <a href="#conditional">Conditional data</a>
      </li>
      <li>
        <a href="#input">Input</a>
      </li>
      <li>
        <a href="#lifecycle">Lifecycle hooks</a>
      </li>
      <li>
        <a href="#events">Events and methods</a>
      </li>
    </ul>
    <h3>Templates</h3>
    <ul>
      <li>
        <a href="#interpolation">Interpolation</a>
      </li>
    </ul>
    <h3>Chapter</h3>
    <ul>
      <li>
        <a href="#example">example</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
