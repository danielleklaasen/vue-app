<template>
  <div class="input">
    <h1>User input</h1>
    <a href="https://vuejs.org/v2/guide/forms.html">Docs</a>
    <br/>
    <br/>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <p>Code example:</p>
    <pre>
      <code>
&lt;input v-model="message" placeholder="edit me"&gt;
&lt;p>Message is: {{ message }}&lt;/p&gt;
      </code>
    </pre>
    <br/>
    <pre>
      <code>
data: () => {
  return {
      message: ""
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
      message: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {}
</style>
