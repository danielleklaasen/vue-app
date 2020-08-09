<template>
  <div id="events">
    <h1>Events and methods</h1>
    <a href="https://vuejs.org/v2/guide/events.html#Method-Event-Handlers"
      target="_blank" >Docs</a
    >
    <br />
    <br />
    <button v-on:click="toggleKitten()">{{ showKitten ? "Hide kitten" : "Show kitten" }}</button>
    <br/>
    <br/>
    <img v-if="showKitten && kittenSrc" alt="kitten" :src="kittenSrc" />
    <p>Code example:</p>
    <pre>
      <code>
&lt;button v-on:click="toggleKitten()"&gt;
    &#123; &#123; showKitten ? "Hide kitten" : "Show kitten" &#125; &#125; 
&lt;/button&gt;
      </code>
    </pre>
    <br />
    <pre>
      <code>
data: () => {
  return {
      showKitten: false,
      kittenSrc: null,
  };
}

mounted: async function() {
  this.kittenSrc = await fetchKitten();
}

methods: function() {
  toggleKitten: function() {
      this.showKitten = !this.showKitten;
  },
}
      </code>
    </pre>
  </div>
</template>

<script>
import fetchKitten from '../helpers/kitten'

export default {
  name: "Events",
  data: () => {
    return {
      showKitten: false,
      kittenSrc: null,
    };
  },
  mounted: async function() {
    this.kittenSrc = await fetchKitten();
  },
  methods: {
    toggleKitten: function() {
        this.showKitten = !this.showKitten;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.events {
}
img {
width: 250px;
}
</style>
