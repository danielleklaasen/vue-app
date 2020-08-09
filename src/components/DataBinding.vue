<template>
  <div id="data-binding">
    <h1>Data binding</h1>
    <a href="https://vuejs.org/v2/guide/syntax.html#Attributes" target="_blank">Docs</a>
    <br/>
    <br/>
    <img :alt="imageAlt" src="../assets/kittens.jpg" />
    &nbsp;
    <img v-bind="{
        alt: imageAlt
      }" src="../assets/kittens.jpg" />
    <p>Code example:</p>
    <pre>
      <code>
&lt;!-- can also be written as v-bind:alt --&gt;

&lt;img id="mainImg" :alt="imageAlt" src="../assets/kittens.jpg" /&gt;


&lt;!-- or passed to v-bind as an object --&gt;

&lt;img 
  id="mainImg"
  v-bind="{ alt: imageAlt }" 
  src="../assets/kittens.jpg" 
/&gt;
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
      imageAlt: "Kitten"
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
