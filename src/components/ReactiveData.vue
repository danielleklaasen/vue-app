<template>
  <div class="reactive-data">
    <h1>Reactive data</h1>
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
</style>
