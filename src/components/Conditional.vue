<template>
  <div class="conditional">
    <h1>Conditional data</h1>
    <a href="https://vuejs.org/v2/guide/conditional.html">Docs</a>
    <br/>
    <br/>
    <h2 v-if="awesome">Vue is awesome!</h2>
    <h2 v-else>Oh no 😢</h2>
    <p>Code example:</p>
    <pre>
      <code>
&lt;h2 v-if="awesome">Vue is awesome!&lt;/h2&gt;
&lt;h2 v-else>Oh no 😢&lt;/h2&gt;
      </code>
    </pre>
    <br/>
    <pre>
      <code>
data: () => {
  return {
      awesome: true
  };
}
      </code>
    </pre>    
  </div>
</template>

<script>
export default {
  name: 'Conditional',
  data: () => {
    return {
      awesome: true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conditional {}
</style>
