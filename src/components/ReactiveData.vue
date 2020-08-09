<template>
  <div id="reactive-data">
    <h1>Reactive data</h1>
    <a href="https://vuejs.org/v2/guide/reactivity.html" target="_blank">Docs</a>
    <br/>
    <br/>
    <img src="../assets/data.png" />    
    <br/>
    <br/>
    {{ reactive }}
    <p>Code example:</p>
    <pre>
      <code>
&#123; &#123; reactive &#125; &#125;
      </code>
    </pre>
    <br/>
    <pre>
      <code>
data: () => {
  return {
      reactive: 'Reactive data example. This text will respond to change.'
  };
}
      </code>  
      </pre>  
  </div>
</template>

<script>
export default {
  name: 'ReactiveData',
  data: () => {
    return {
      reactive: 'Reactive data example. This text will respond to change.'
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
width: 450px;
}
</style>
