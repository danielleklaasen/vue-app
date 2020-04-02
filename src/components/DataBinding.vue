<template>
  <div class="data-binding">
    <h1>Data binding</h1>
    <a href="https://vuejs.org/v2/guide/syntax.html#Attributes">Docs</a>
    <br/>
    <br/>
    <img :alt="imageAlt" src="../assets/logo.png" />
    <p>Code example:</p>
    <pre>
      <code>
&lt;!-- can also be written as v-bind:alt --&gt;
&lt;img id="mainImg" :alt="imageAlt" src="../assets/logo.png" /&gt;
      </code>
    </pre>
    <br/>
    <pre>
      <code>
data: () => {
  return {
      imageAlt: "Logo"
  };
}
      </code>
    </pre> 
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data: () => {
    return {
      imageAlt: "Logo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data-binding {
  padding-bottom: 16px;
}
img {
  width: 250px;
}
</style>
