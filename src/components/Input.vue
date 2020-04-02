<template>
  <div class="input">
    <h1>User input</h1>
    <a href="#">Docs</a>
    <br/>
    <br/>
    <!-- code -->
    <p>Code example:</p>
    <pre>
      <code>
&lt; Escape characters &gt;
      </code>
    </pre>
    <br/>
    <pre>
      <code>
data: () => {
  return {
      variable: "value"
  };
}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => {
    return {
      variable: 'value'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {}
</style>
