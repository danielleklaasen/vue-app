<template>
  <div class="lifecycle">
    <h1>Lifecycle hooks</h1>
    <a href="https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks">Docs</a>
    <br/>
    <br/>
    <img v-if="kittenSrc" alt="kitten" :src="kittenSrc" />
    <p>Code example:</p>
    <pre>
      <code>
&lt;img v-if="kittenSrc" alt="kitten" :src="kittenSrc" /&gt;
      </code>
    </pre>
    <br/>
    <pre>
      <code>    
data: () => {
  return {
      kittenSrc: null
  };
}

mounted: function() {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
      this.kittenSrc = data[0].url;
  })
}   
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Lifecycle',
  data: () => {
    return {
      kittenSrc: null
    }
  },
  mounted: function() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        this.kittenSrc = data[0].url;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lifecycle {}
img {
    width: 200px;
}
</style>
