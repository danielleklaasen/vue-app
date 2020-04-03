<template>
  <div class="example">
    <h1>Example</h1>
    <a href="#">Docs</a>
    <br/>
    <br/>
    <!-- code -->
    <p>Code example:</p>
    <pre>
      <code>
Escaped characters:  
<!-- < -->    
&lt; 
<!-- > -->
&gt;
<!-- { -->
&#123; 
<!-- } -->
&#125;
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
  name: 'Example',
  data: () => {
    return {
      variable: 'value'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example {}
</style>
